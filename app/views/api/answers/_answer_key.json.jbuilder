# Unique user response to question to make AnswerForm work

json.set! "#{answer.question_id}" do
  json.extract! answer, :id, :body, :question_id, :user_location, :user_id, :username
end
