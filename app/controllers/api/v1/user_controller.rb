class Api::V1::UserController < ApplicationController

  skip_before_action :verify_authenticity_token
  def indexUser
  end

  def index
    # puts(t("employee.message.hello"))
    # flash[:notice] = t("employee.message.hello")
    
  end

  def create
    puts("Hello My friend ...................................................................................")
    user = User.create(user_params)
    render json: user
  end

  def logintest
    puts("............................................LOGIN........................................")
    # sql = "select * from users where password_digest=params[:email]"
    #   @user = ActiveRecord::Base.connection.execute(sql)
    # puts("========Email :========= ")
    # render json: @user

    @user = User.find_by(email: user_params[:email])

    if @user && @user.authenticate(user_params[:password])
      session[:user_id] = @user.id
      puts("Logged in successfully.",session[:user_id])
    end
    puts("session : ",session[:user_id])
    
    render json: {:user => @user}
  end

  def update
  end

  def destroy 
  end

  
  private def user_params
    params.require(:values).permit(:id, :user_name, :del_flg, :create_user, :update_user, :email, :password)
  end
end
