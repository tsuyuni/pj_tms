Rails.application.routes.draw do
  resources :members, only: [:index, :show, :update]
end
