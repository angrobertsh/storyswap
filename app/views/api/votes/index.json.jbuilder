json.answerVotes(@answer_votes) do |vote|
  json.partial! "api/votes/vote", vote: vote
end
json.questionVotes(@question_votes) do |vote|
  json.partial! "api/votes/vote", vote: vote
end
json.commentVotes(@comment_votes) do |vote|
  json.partial! "api/votes/vote", vote: vote
end
