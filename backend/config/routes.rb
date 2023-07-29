Rails.application.routes.draw do
  mount_devise_token_auth_for 'Member', at: 'auth', controllers: {
    registrations: 'auth/registrations'
  }
  namespace :auth do
    resources :sessions, only: %i[index]
  end
  resources :members, only: [:index, :show, :update]
  resources :mentors, only: [:index, :show, :update]
  resources :courses, only: [:index, :show]
end
