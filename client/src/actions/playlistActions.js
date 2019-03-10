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
export const currentPlaylist = playlist => {
	return {
		type: 'CURRENT_PLAYLIST',
		playlist
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