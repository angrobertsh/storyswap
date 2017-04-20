export const getCurrentUserAnswers = (success, error) => {
  $.ajax({
    url: "api/answers",
    method: "GET",
    success,
    error
  })
}

export const getSingleAnswer = (success, error, answerId) => {
  $.ajax({
    url: `api/answers/${answerId}`,
    method: "GET",
    success,
    error
  })
};

export const createAnswer = (success, error, answer) => {
  $.ajax({
    url: `api/answers`,
    method: "POST",
    data: {answer: answer},
    success,
    error
  })
};
