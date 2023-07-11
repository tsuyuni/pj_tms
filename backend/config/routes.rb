Rails.application.routes.draw do
  resources :members, only: [:index, :show, :update]
  resources :mentors, only: [:index, :show]
  resources :courses, only: [:index, :show]

end
