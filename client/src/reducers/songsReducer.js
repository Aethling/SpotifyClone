const defaultState = {
	fetchSongsPending: true,
	recentSongs: null
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
			}
		default:
			return state;
	}

}
export default songsReducer;