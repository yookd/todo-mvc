class CreateTodoLists < ActiveRecord::Migration
  def change
    create_table :todo_lists do |t|
      t.integer     :todo_item_id
      t.string      :title

      t.timestamps
    end
  end
end
