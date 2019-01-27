
Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show, :index, :update] do
      resources :videos, only: [:index, :show]
    end
    resources :videos, only: [ :index, :new, :create, :update, :destroy]
    resource :session, only: [:new, :create, :destroy]
  end
end