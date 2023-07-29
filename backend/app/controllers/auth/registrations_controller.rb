class Auth::RegistrationsController < ApplicationController
  private

  def sign_up_params
    params.permit(:email,:user_id, :password, :password_confirmation)
  end
end
