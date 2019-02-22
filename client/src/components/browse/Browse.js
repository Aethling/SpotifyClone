import React from 'react';
import { connect } from 'react-redux';

const Browse = ({ token, browseCategories }) => {
			// {browseCategories.map((category, index) => <img key={index} className="browseIcon" /> )}
			if (browseCategories) {
				return (
					<div>
						<p>categories returned</p>
					</div>
					)
			}
	return (
		<div>
			not returned
		</div>
	)
}

const mapStateToProps = state => {
	return {
		token: state.userReducer.token,
		browseCategories: state.browseReducer.categories
	}
}

export default connect(mapStateToProps)(Browse);
