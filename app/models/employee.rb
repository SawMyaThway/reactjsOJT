class Employee < ApplicationRecord
    belongs_to :role
    belongs_to :group

    # validates :email, uniqueness: true, with: :validates
    
end
