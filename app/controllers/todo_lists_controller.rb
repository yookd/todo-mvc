class TodoListsController < ApplicationController

  def index
  end

  def create

    @todo_list = TodoList.create()

    @todo_list

  end

end
