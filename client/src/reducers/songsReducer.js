const defaultState = {
	fetchSongsPending: true,
}

export const songsReducer = (state = defaultState, action) => {
	switch(action.type) {
		  case "FETCH_RECENTLY_PLAYED_REQUEST":
    return {
      ...state,
      fetchSongsPending: true
    };
		case "Fetch_RECENTLY_PLAYED_SUCCESS":
			return {
				...state,
				songs: action.songs,
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