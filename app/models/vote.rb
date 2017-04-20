class Vote < ApplicationRecord

  validates :user_id, uniqueness: { scope: [:votable_id, :votable_type] }, presence: true
  validates :value, presence: true

  belongs_to :user, optional: true
  belongs_to :votable, polymorphic: true

end
