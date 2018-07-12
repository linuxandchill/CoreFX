class AddFieldsToCheckboxes < ActiveRecord::Migration[5.0]
  def change
    add_column :checkboxes, :chapterkey, :string
    add_reference :checkboxes, :user, foreign_key: true
    add_index :checkboxes, [:user_id, :chapterkey], unique:true
  end
end
