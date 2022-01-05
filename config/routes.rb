Rails.application.routes.draw do
  get 'users', to: "api/v1/user#index"
  
  devise_for :users
  namespace :api do
    namespace :v1 do
      # ユーザー管理画面
      get 'user/indexUser', to: "user#indexUser"
    end
  end
  get 'home/index'
  root 'home#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  get 'employees', to: "api/v1/user#employee"
  namespace :api do
    namespace :v1 do
      resources :employees
      get 'employee', to: "employee#indexEmployee"
      post 'employee/create', to: "employee#create"
      delete 'employee/:id', to: "employee#destroy"
      post 'employee/update/:id', to: "employee#update"
      
    end
  end

end
