export function setNowPlaying(track) {
	return {
		type: 'SET_NOW_PLAYING',
		track
	}
}
export function toggleIsPlaying(boolean) {
	return {
		type: 'TOGGLE_ISPLAYING',
		boolean
	}
}
export function selectedAlbumImage(albumImage) {
	return {
		type: 'SELECTED_ALBUM_IMAGE',
		albumImage
	}
}
export const fetchSongsRequestSuccess = songs => {
	return {
		type: 'FETCH_SONGS_REQUEST_SUCCESS',
		songs
	}
};
export const fetchSongsRequestError = error => {
	return {
		type: 'FETCH_SONGS_REQUEST_ERROR',
		error
	}
};
export const fetchSongs = token => {
	return dispatch => {
		return fetch(`https://api.spotify.com/v1/me/tracks?limit=50`, {
				headers: {'Authorization': 'Bearer ' + token}
		})
			.then(blob => blob.json())
			.then(res => dispatch(fetchSongsRequestSuccess(res)))
			.catch(err => dispatch(fetchSongsRequestError(err)))
	}
}