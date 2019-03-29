class AddAvatarToPeople < ActiveRecord::Migration[5.2]
  def change
    add_column :people, :avatar, :text
  end
end
