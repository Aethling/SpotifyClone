
export function fetchUser() {
  return {
    type: 'FETCH_USER_REQUESTED'
  };
}

export function fetchUserSuccess(user) {
  return {
    type: 'FETCH_USER_SUCCESS',
    user
  };
}

export function fetchUserError(err) {
  return {
    type: 'FETCH_USER_ERROR',
    err
  };
}

export function getUser(token) {
  return dispatch => {
    dispatch(fetchUser());
    return fetch('https://api.spotify.com/v1/me', {
					headers: {'Authorization': 'Bearer ' + token}
    })
      .then(res => res.json())
      .then(res => dispatch(fetchUserSuccess(res)))
      .catch(err => dispatch(fetchUserError(err)));
  };
}