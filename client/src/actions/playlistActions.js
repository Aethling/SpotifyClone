export const fetchPlaylistsRequest = () => {
	return {
		type: 'FETCH_PLAYLISTS_REQUEST',
	}
};
export const fetchPlaylistsRequestSuccess = playlists => {
	return {
		type: 'FETCH_PLAYLISTS_REQUEST_SUCCESS',
		playlists
	}
};
export const fetchPlaylistsRequestError = error => {
	return {
		type: 'FETCH_PLAYLISTS_REQUEST_ERROR',
		error
	}
};
export const fetchPlaylists = token => {
	return dispatch => {
		dispatch(fetchPlaylistsRequest())
		return fetch('https://api.spotify.com/v1/me/playlists', {
				headers: {'Authorization': 'Bearer ' + token}
		})
			.then(blob => blob.json())
			.then(res => dispatch(fetchPlaylistsRequestSuccess(res)))
			.catch(err => dispatch(fetchPlaylistsRequestError(err)))
	}
}
export const fetchPlaylistSongsRequest = () => {
	return {
		type: 'FETCH_PLAYLIST_SONGS_REQUEST',
	}
};
export const fetchPlaylistSongsRequestSuccess = playlistSongs => {
	return {
		type: 'FETCH_PLAYLIST_SONGS_REQUEST_SUCCESS',
		playlistSongs
	}
};
export const fetchPlaylistSongsRequestError = error => {
	return {
		type: 'FETCH_PLAYLIST_SONGS_REQUEST_ERROR',
		error
	}
};
export const currentPlaylistID = playlistID => {
	return {
		type: 'CURRENT_PLAYLIST_ID',
		playlistID
	}
};

export const fetchPlaylistSongs = (token, ID) => {
	return dispatch => {
		dispatch(fetchPlaylistSongsRequest())
		return fetch(`https://api.spotify.com/v1/playlists/${ID}/tracks`, {
				headers: {'Authorization': 'Bearer ' + token}
		})
			.then(blob => blob.json())
			.then(res => dispatch(fetchPlaylistSongsRequestSuccess(res)))
			.catch(err => dispatch(fetchPlaylistSongsRequestError(err)))
	}
}
