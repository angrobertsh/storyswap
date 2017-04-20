export const getComments = (success, error, answerId) => {
  $.ajax({
    url: "api/comments",
    method: "GET",
    data: {answer_id: answerId}
    success,
    error
  })
}

export const createComment = (success, error, comment) => {
  $.ajax({
    url: `api/comments`,
    method: "POST",
    data: comment,
    success,
    error
  })
};
