const defaultState = {
	isArtistSelected: false,
	artistIDs: ''
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
		case ('SET_ARTIST_IDS'):
			return {
				...state,
				artistIDs: action.artistIDs
			}
		case ("FETCH_SELECTED_ARTIST_REQUEST"):
			return {
				...state,
				selectedArtistPending: true
			}
		case ('FETCH_SELECTED_ARTIST_REQUEST_SUCCESS'):
			return {
				...state,
				selectedArtistTracks: action.selectedArtistTracks,
				selectedArtistPending: false,
				selectedArtistError: false,
				isArtistSelected: true
			}
		case ('FETCH_SELECTED_ARTIST_REQUEST_ERROR'):
			return {
				...state,
				selectedArtistPending: false,
				selectedArtistError: action.error
			}
		default:
			return state;
	}

}
export default albumsReducer;