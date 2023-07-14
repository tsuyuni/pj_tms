class MentorsController < ApplicationController
  def index
    mentors = Mentor.all
    render status: 200, json: mentors
  end

  def show
    mentor = Mentor.find(params[:id])
    render status: 200, json: mentor
  end

  def update
    mentor = Mentor.find(params[:id])
    mentor.update({
      name: params[:name]
    })
    render status: 200, json: mentor
  end
end
