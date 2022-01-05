class Api::V1::EmployeeController < ApplicationController

  skip_before_action :verify_authenticity_token

    def show
    end
    
    #DBから社員情報を取得する。
    def indexEmployee
      @group = Group.all;
      @role = Role.all;
      # flash[:notice] = t("employee.message.hello")
      sql = "select roles.id as role_id, groups.id as group_id, employees.id,
      employees.name,employees.age,employees.email,
      employees.birthday,employees.address,roles.role_name,
      groups.group_name from employees, roles, groups 
      where groups.id = employees.group_id and roles.id = employees.role_id"
      @employee = ActiveRecord::Base.connection.execute(sql)
      render json: { :employees => @employee, :group => @group, :role => @role, :successSMS => flash[:notice]} 
    
    
    #   # ログ出力
    #   config.logger = Logger.new('log/try.log', 'daily', 'rotate 2' ) 
    #   logger.datetime_format = "%Y-%m-%d %H:%M:%S"
    #   logger.formatter = proc do |severity, datetime, progname, msg|
    #   "ProductLog: #{msg}\n"
    #  end  
    #   logger.debug(@role.inspect)
      

    end
  
    #DBに社員データを入力する
    def create
      # パラメータを使用して従業員を作成する
      employee = Employee.create(employee_params)
      #Localizationでメッセージを表示するため
      flash[:notice] = t("employee.message.insert_message")
      render json: { :employee => employee, :successSMS => flash[:notice] }
    end
  
    #DBに社員データを更新する。
    #更新したいparams_idを取ります。
    def update
      # IDを持つ従業員を選択します
      employee = Employee.find(params[:id])
      employee.update(employee_params)
      @role = Role.find(employee.role_id)
      @group = Group.find(employee.group_id)
      render json: { :employee => employee, :role => @role, :group => @group }

    end
  
    #params_idと同じ社員データを削除する
    def destroy 
      Employee.destroy(params[:id])
    end

    # 正しいパラメータのリストのみを許可します。
    private def employee_params
      params.require(:values).permit(:id, :name, :age, :email, :birthday, :address, :role_id, :group_id, :filename)
    end

  end