import React from 'react';
import { changeTitle } from '../actions/titleActions';
import { connect } from 'react-redux';


const ArtistsPage = ({ dispatch }) => {
	const title = () => {
		dispatch(changeTitle('Artists'))
	}
	return (
		<div>
			<h1>
				These are your saved artists
				{title()}
			</h1>
		</div>
	)
}

export default connect()(ArtistsPage)