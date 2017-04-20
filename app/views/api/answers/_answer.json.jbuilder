json.extract! answer, :id, :body, :question_id, :user_location, :user_id, :username, :user_age
json.votes answer.votes.each do |vote|
  json.partial! "api/votes/vote", vote: vote
end
json.comments answer.comments.each do |comment|
  json.partial! "api/comments/comment", comment: comment
end
