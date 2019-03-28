class CreatePeople < ActiveRecord::Migration[5.2]
  def change
    create_table :people do |t|
      t.string :username
      t.string :email
      t.string :address
      t.string :gender
      t.text :bio

      t.timestamps
    end
  end
end
