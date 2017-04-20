class Answer < ApplicationRecord
  validates :body, :question_id, :user_location, presence: true
  # validates :body, length: {minimum: 200}

  belongs_to :question
  belongs_to :user, optional: true
  has_many :comments
  has_many :votes, :as => :votable

end
