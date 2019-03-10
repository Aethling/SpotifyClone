const playlistsReducer = (state = {}, action) => {
	switch (action.type) {
		case ("FETCH_PLAYLISTS_REQUEST"):
			return {
				...state,
				playlistsPending: true
			}
		case ('FETCH_PLAYLISTS_REQUEST_SUCCESS'):
			return {
				...state,
				playlists: action.playlists,
				playlistsPending: false,
				playlistsError: false
			}
		case ('FETCH_PLAYLISTS_REQUEST_ERROR'):
			return {
				...state,
				playlistsPending: false,
				playlistsError: action.error
			}
		case ('CURRENT_PLAYLIST'):
			return {
				...state,
				currentPlaylist: action.playlist
			}
		default:
			return state;
	}

}
export default playlistsReducer;