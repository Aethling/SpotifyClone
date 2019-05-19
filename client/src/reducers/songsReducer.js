const defaultState = {
	fetchSongsPending: true,
	recentSongs: null,
	songId: null,
	isPlaying: false,
	nowPlaying: null,
	songs: null,
	songTime: 0
}

export const songsReducer = (state = defaultState, action) => {
	switch(action.type) {
		  case "FETCH_RECENTLY_PLAYED_REQUEST":
    return {
      ...state,
      fetchSongsPending: true
    };
		case "FETCH_RECENTLY_PLAYED_SUCCESS":
			return {
				...state,
				recentSongs: action.recentSongs,
				fetchSongsError: false,
				fetchSongsPending: false
			};
		case "FETCH_RECENTLY_PLAYED_ERROR":
			return {
				...state,
				fetchSongsError: true,
				fetchSongsPending: false
			};
		case "SET_NOW_PLAYING":
			return {
				...state,
				nowPlaying: action.track
			}
		case "TOGGLE_ISPLAYING":
			return {
				...state,
				isPlaying: action.boolean
			}
		case "FETCH_SONGS_REQUEST_SUCCESS":
			return {
				...state,
				songs: action.songs
			}
		case "FETCH_SONGS_REQUEST_ERROR":
			return {
				...state,
				fetchSongsError: true,
				error: action.error
			}
		case "INCREASE_SONG_TIME":
			return {
				...state,
				songTime: action.time
			}
		default:
			return state;
	}

}
export default songsReducer;