class CreateAnswers < ActiveRecord::Migration[5.0]
  def change
    create_table :answers do |t|
      t.string :body, null: false
      t.integer :question_id, null: false
      t.string :user_location, null: false
      t.string :username, null: false
      t.integer :user_age
      t.integer :user_id

      t.timestamps null: false
    end
  end
end
