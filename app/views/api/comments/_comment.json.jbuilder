json.extract! comment, :id, :answer_id, :body, :username, :user_location, :user_id, :user_age
json.votes comment.votes.each do |vote|
  json.partial! "api/votes/vote", vote: vote
end
