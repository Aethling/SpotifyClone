const albumsReducer = (state = {}, action) => {
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
		default:
			return state;
	}

}
export default albumsReducer;