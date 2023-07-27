class MembersController < ApplicationController
  def index
    members = Member.all
    render status: 200, json: members
  end

  def show
    member = Member.find(params[:id])
    render status: 200, json: member
  end

  def update
    member = Member.find(params[:id])
    member.update(member_params)
    render status: 200, json: member
  end

  private
    def member_params
      params.require(:member).permit(:name, :goal, :reflection)
    end
end
