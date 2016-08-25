class Api::TodosController < ApplicationController
  def index
    @todos = Todo.all
    render json: @todos
  end

  def create
    @todo = Todo.new(todo_params)

    if @todo.save
      render json: @todo
    else
      puts @todo.errors.full_messages
      render json: "fail"
    end
  end

  def update

  end

  def destroy
    @todo = Todo.find(params[:id])

    if @todo.destroy
      render json: @todo
    else
      puts @todo.errors.full_messages
      render json: "fail"
    end
  end

  private

  def todo_params
    params.require(:todo).permit(:title, :body, :done)
  end

end
