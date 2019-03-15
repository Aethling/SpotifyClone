export const setArtistIDs = artistIDs => {
	return {
		type: 'SET_ARTIST_IDS',
		artistIDS
	}
};
export const fetchArtistsRequest = () => {
	return {
		type: 'FETCH_ARTISTS_REQUEST'
	}
}
export const fetchArtistsRequestSuccess = (artists) => {
	return {
		type: 'FETCH_ARTISTS_REQUEST_SUCCESS',
		artists
	}
}
export const fetchArtistsRequestError = (error) => {
	return {
		type: 'FETCH_ARTISTS_REQUEST_ERROR',
		error
	}
}
export const fetchArtists = (token) => {
	return dispatch => {
		dispatch(fetchArtistsRequest())
		return fetch('https://api.spotify.com/v1/artists', {
				headers: {'Authorization': 'Bearer ' + token}
		})
			.then(blob => blob.json())
			.then(res => dispatch(fetchArtistsRequestSuccess(res)))
			.catch(err => dispatch(fetchArtistsRequestError(err)))
	}
}