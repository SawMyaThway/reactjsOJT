class AddGroupIdToEmployees < ActiveRecord::Migration[6.1]
  def change
    add_column :employees, :group_id, :integer
    add_index :employees, :group_id
  end
end
