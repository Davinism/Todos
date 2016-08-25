Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :todos, only: [:index, :create, :update, :destroy]
  end

  resources :static_pages

  root to: 'static_pages#root'
end
