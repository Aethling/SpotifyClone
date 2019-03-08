const defaultState = {
	isArtistSelected: false
}

const albumsReducer = (state = defaultState, action) => {
	switch (action.type) {
		case ("FETCH_ARTISTS_REQUEST"):
			return {
				...state,
				artistsPending: true
			}
		case ('FETCH_ARTISTS_REQUEST_SUCCESS'):
			return {
				...state,
				artists: action.artists,
				artistsPending: false,
				artistsError: false
			}
		case ('FETCH_ARTISTS_REQUEST_ERROR'):
			return {
				...state,
				artistsPending: false,
				artistsError: action.error
			}
		default:
			return state;
	}

}
export default albumsReducer;