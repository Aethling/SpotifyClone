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
		case ('IS_SELECT_ALBUM'):
			return {
				...state,
				isAlbumSelected: action.boolean
			}
		case ('SELECTED_ALBUM_IMAGE'):
			return {
				...state,
				albumImage: action.albumImage
			}
		default:
			return state;
	}

}
export default albumsReducer;