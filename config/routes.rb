Rails.application.routes.draw do
  root 'static_pages#index'

  namespace :api do
    namespace :v1 do
      resources :websites, only: [:index]
      resources :products, only: [:create]
    end
  end
end
