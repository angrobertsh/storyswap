export const login = (success, error, user) => {
  $.ajax({
    url: "api/session",
    method: "POST",
    data: user,
    success,
    error
  })
};

export const signup = (success, error, user) => {
  $.ajax({
    url: "api/users",
    method: "POST",
    data: user,
    success,
    error
  })
};

export const logout = (success, error) => {
  $.ajax({
    url: "api/session",
    method: "DELETE",
    success,
    error
  })
};
