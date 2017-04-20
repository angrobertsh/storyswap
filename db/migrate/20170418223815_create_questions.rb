class CreateQuestions < ActiveRecord::Migration[5.0]
  def change
    create_table :questions do |t|
      t.string :title, null: false
      t.string :description

      t.timestamps null: false
    end

    add_index :questions, :title, unique: true
  end
end
