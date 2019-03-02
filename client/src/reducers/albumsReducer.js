const defaultState = {
	isAlbumSelected: false
}

const albumsReducer = (state = defaultState, action) => {
	switch (action.type) {
		case ("FETCH_ALBUMS_REQUEST"):
			return {
				...state,
				albumsPending: true
			}
		case ('FETCH_ALBUMS_REQUEST_SUCCESS'):
			return {
				...state,
				albums: action.albums,
				albumsPending: false,
				albumsError: false
			}
		case ('FETCH_ALBUMS_REQUEST_ERROR'):
			return {
				...state,
				albumsPending: false,
				albumsError: action.error
			}
		case ('SELECT_ALBUM'):
			return {
				...state,
				isAlbumSelected: action.boolean
			}
		default:
			return state;
	}

}
export default albumsReducer;