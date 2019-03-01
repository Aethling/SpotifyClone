export const fetchAlbumsRequest = () => {
	return {
		type: 'FETCH_ALBUMS_REQUEST'
	}
}
export const fetchAlbumsRequestSuccess = (albums) => {
	return {
		type: 'FETCH_ALBUMS_REQUEST_SUCCESS',
		albums
	}
}
export const fetchAlbumsRequestError = (error) => {
	return {
		type: 'FETCH_ALBUMS_REQUEST_ERROR',
		error
	}
}
export const fetchAlbums = (token) => {
	return dispatch => {
		dispatch(fetchAlbumsRequest())
		return fetch('https://api.spotify.com/v1/me/albums', {
				headers: {'Authorization': 'Bearer ' + token}
		})
			.then(blob => blob.json())
			.then(res => dispatch(fetchAlbumsRequestSuccess(res)))
			.catch(err => dispatch(fetchAlbumsRequestError(err)))
	}
}