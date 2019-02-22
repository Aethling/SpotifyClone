export const fetchBrowseRequest = () => {
	return {
		type: 'FETCH_BROWSE_REQUEST'
	}
}
export const fetchBrowseRequestSuccess = (categories) => {
	return {
		type: 'FETCH_BROWSE_REQUEST_SUCCESS',
		categories
	}
}
export const fetchBrowseRequestError = (error) => {
	return {
		type: 'FETCH_BROWSE_REQUEST_ERROR',
		error
	}
}
export const fetchBrowse = (token) => {
	return dispatch => {
		dispatch(fetchBrowseRequest())
		return fetch('https://api.spotify.com/v1/browse/categories', {
				headers: {'Authorization': 'Bearer ' + token}
		})
			.then(blob => blob.json())
			.then(res => dispatch(fetchBrowseRequestSuccess(res)))
			.catch(err => dispatch(fetchBrowseRequestError(err)))
	}
}