class ApplicationController < ActionController::Base

  around_action :switch_locale
  rescue_from ActiveRecord::RecordNotFound, with: :not_found_record

  private
    #削除データがない条件
    def not_found_record(e)
      render json: { :errors => I18n.t("employee.error.delete_error") }, status: :ok
    end

    #翻訳するため
    def switch_locale(&action)
      locale = params[:locale] || I18n.default_locale
      I18n.with_locale(locale, &action)
    end
end
