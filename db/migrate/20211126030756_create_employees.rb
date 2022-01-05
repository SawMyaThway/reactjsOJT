class CreateEmployees < ActiveRecord::Migration[6.1]
  def change
    create_table :employees do |t|
      t.string :name
      t.integer :age
      t.string :email
      t.date :birthday
      t.string :address

      t.timestamps
    end
  end
end
