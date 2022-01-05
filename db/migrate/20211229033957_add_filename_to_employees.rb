class AddFilenameToEmployees < ActiveRecord::Migration[6.1]
  def change
    add_column :employees, :filename, :string
  end
end
