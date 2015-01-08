class CreateTodoItems < ActiveRecord::Migration
  def change
    create_table :todo_items do |t|
      t.text        :description
      t.boolean     :is_complete

      t.timestamps
    end
  end
end
