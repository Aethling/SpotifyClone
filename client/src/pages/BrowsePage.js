import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBrowse } from '../actions/browseActions';
import Browse from '../components/browse/Browse';
import { changeTitle } from '../actions/titleActions';

class BrowsePage extends Component {

	componentDidMount() {
		this.props.dispatch(fetchBrowse(this.props.token));
		this.props.dispatch(changeTitle('Browse Categories'))
	}
	 
render() {
	return (
		<div>
			{!this.props.browsePending &&
					<div className="browseContainer">
						<Browse />
					</div>}
		</div>
	)
}
}

const mapStateToProps = state => {
	return {
		browsePending: state.browseReducer.browsePending,
		token: state.userReducer.token
	}
}

export default connect(mapStateToProps)(BrowsePage)