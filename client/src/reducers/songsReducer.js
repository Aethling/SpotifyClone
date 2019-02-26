const defaultState = {
	fetchSongsPending: true,
	recentSongs: null,
	songId: null,
	isPlaying: false,
	nowPlaying: null
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
		case "SET_SONG_URL":
			return {
				...state,
				nowPlaying: action.url
			}
		case "TOGGLE_ISPLAYING":
			return {
				...state,
				isPlaying: action.boolean
			}
		default:
			return state;
	}

}
export default songsReducer;