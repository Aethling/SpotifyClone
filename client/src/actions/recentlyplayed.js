
export const fetchRecentlyPlayed = token => {
	return dispatch => {
		dispatch(fetchRecentlyPlayedRequest());
		return fetch('https://api.spotify.com/v1/me/player/recently-played', {
					headers: {'Authorization': 'Bearer ' + token}
				})
					.then(blob => blob.json())
					.then(res => dispatch(fetchRecentlyPlayedSuccess(res)))
					.then(err => dispatch(fetchRecentlyPlayedError(err)));
	}
}
export function fetchRecentlyPlayedSuccess(recentSongs) {
	return {
		type: 'FETCH_RECENTLY_PLAYED_SUCCESS',
		recentSongs
	};
}

export function fetchRecentlyPlayedError(err) {
	return {
		type: 'FETCH_RECENTLY_PLAYED_ERROR',
		err
	}
}
export function fetchRecentlyPlayedRequest() {
	return {
		type: 'FETCH_RECENTLY_PLAYED_REQUEST'
	}
}