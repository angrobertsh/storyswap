class Comment < ApplicationRecord
  validates :body, :answer_id, :user_location, presence: true

  belongs_to :user, optional: true
  belongs_to :answer
  delegate :question, to: :answer

  has_many :votes, :as => :votable

end
