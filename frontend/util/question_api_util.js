export const getAllQuestions = (success, error) => {
  $.ajax({
    url: "api/questions",
    method: "GET",
    success,
    error
  })
};

export const getSingleQuestion = (success, error, questionId) => {
  $.ajax({
    url: `api/questions/${questionId}`,
    method: "GET",
    success,
    error
  })
};

export const createQuestion = (success, error, question) => {
  $.ajax({
    url: `api/questions`,
    method: "POST",
    data: {question: question},
    success,
    error
  })
};
