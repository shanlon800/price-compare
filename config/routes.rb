Rails.application.routes.draw do
  root 'static_pages#index'
  get '/products/:id' => 'static_pages#index'

  namespace :api do
    namespace :v1 do
      resources :websites, only: [:index]
      resources :products, only: [:create, :show]
    end
  end
end
