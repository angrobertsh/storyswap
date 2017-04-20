json.set! "#{question.id}" do
  json.extract! question, :id, :title, :description
  json.votes(question.votes) do |vote|
    json.partial! "api/votes/vote", vote: vote
  end
  json.answers(question.answers) do |answer|
    json.partial! "api/answers/answer", answer: answer
  end
end
