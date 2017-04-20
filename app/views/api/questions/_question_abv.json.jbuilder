json.set! "#{question.id}" do
  json.extract! question, :id, :title, :description
  json.votes(question.votes) do |vote|
    json.partial! "api/votes/vote", vote: vote
  end
end
