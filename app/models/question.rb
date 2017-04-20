class Question < ApplicationRecord
  validates :title, presence: true
  has_many :answers
  has_many :comments, :through => :answers
  has_many :votes, :as => :votable

end
