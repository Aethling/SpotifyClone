const browseReducer = (state = {}, action) => {
	switch (action.type) {
		case ("FETCH_BROWSE_REQUEST"):
			return {
				...state,
				browsePending: true
			}
		case ('FETCH_BROWSE_REQUEST_SUCCESS'):
			return {
				...state,
				browseCategories: action.categories,
				browsePending: false,
				browseError: false
			}
		case ('FETCH_BROWSE_REQUEST_ERROR'):
			return {
				...state,
				browsePending: false,
				browseError: true
			}
		default:
			return state;
	}

}
export default browseReducer;