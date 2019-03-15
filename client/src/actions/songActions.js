import uniqBy from 'lodash/uniqBy';

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
			.then(res => {
				let artistIds = uniqBy(res.items, (item) => {
					return item.track.artists[0].id
				}).join('');
				console.log(artistIds);
				dispatch(setArtistIDs(artistIds))
				dispatch(fetchSongsRequestSuccess(res.items))
			})
			.catch(err => dispatch(fetchSongsRequestError(err)))
	}
}
export const setArtistIDs = artistIDs => {
	return {
		type: 'SET_ARTIST_IDS',
		artistIDS
	}
};