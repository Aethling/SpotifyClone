const defaultState = {
	playlistSongsPending: true,
	playListIDPending: false
}
const playlistsReducer = (state = defaultState, action) => {
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
		case ("FETCH_PLAYLIST_SONGS_REQUEST"):
			return {
				...state,
				playlistSongsPending: true
			}
		case ('FETCH_PLAYLIST_SONGS_REQUEST_SUCCESS'):
			return {
				...state,
				playlistSongs: action.playlistSongs,
				playlistSongsPending: false,
				playlistSongsError: false
			}
		case ('FETCH_PLAYLIST_SONGS_REQUEST_ERROR'):
			return {
				...state,
				playlistSongsPending: false,
				playlistSongsError: action.error
			}
		case ('CURRENT_PLAYLIST_ID'):
			return {
				...state,
				playlistID: action.playlistID,
				playListIDPending: true
			}
		case ('SET_PLAYLIST_IMAGE'):
			return {
				...state,
				playlistImage: action.playlistImage,
			}
		default:
			return state;
	}

}
export default playlistsReducer;