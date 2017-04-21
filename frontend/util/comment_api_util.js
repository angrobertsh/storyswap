export const createComment = (success, error, comment) => {
  $.ajax({
    url: `api/comments`,
    method: "POST",
    data: {comment: comment},
    success,
    error
  })
};
