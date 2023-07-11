class CoursesController < ApplicationController
  def index
    courses = Course.all
    render status: 200, json: courses
  end

  def show
    course = Course.find(params[:id])
    render status: 200, json: course
  end
end
