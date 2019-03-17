
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
export const fetchArtists = (token, IDs) => {
	return dispatch => {
		dispatch(fetchArtistsRequest())
		return fetch(`https://api.spotify.com/v1/artists?ids=${IDs}`, {
				headers: {'Authorization': 'Bearer ' + token}
		})
			.then(blob => blob.json())
			.then(res => dispatch(fetchArtistsRequestSuccess(res)))
			.catch(err => dispatch(fetchArtistsRequestError(err)))
	}
}
export const fetchSelectedArtistRequest = () => {
	return {
		type: 'FETCH_SELECTED_ARTIST_REQUEST'
	}
}
export const fetchSelectedArtistRequestSuccess = (selectedArtistTracks) => {
	return {
		type: 'FETCH_SELECTED_ARTIST_REQUEST_SUCCESS',
		selectedArtistTracks
	}
}
export const fetchSelectedArtistRequestError = (error) => {
	return {
		type: 'FETCH_SELECTED_ARTIST_REQUEST_ERROR',
		error
	}
}
export const isArtistSelected = (boolean) => {
	return {
		type: 'IS_ARTIST_SELECTED',
		boolean
	}
}
export const fetchSelectedArtist = (token, ID) => {
	return dispatch => {
		dispatch(fetchSelectedArtistRequest())
		return fetch(`https://api.spotify.com/v1/artists/${ID}/top-tracks?country=US`, {
				headers: {'Authorization': 'Bearer ' + token}
		})
			.then(blob => blob.json())
			.then(res => dispatch(fetchSelectedArtistRequestSuccess(res)))
			.catch(err => dispatch(fetchSelectedArtistRequestError(err)))
	}
}
