class AddRoleIdToEmployees < ActiveRecord::Migration[6.1]
  def change
    add_column :employees, :role_id, :integer
    add_index :employees, :role_id
  end
end
