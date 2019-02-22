import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBrowse } from '../actions/browseActions';
import Browse from '../components/browse/Browse';

class BrowsePage extends Component {

	componentDidMount() {
		this.props.dispatch(fetchBrowse(this.props.token));
	}

	 
render() {
	if (this.props.browsePending) {
		return (
			<div>
				<p>Loading</p>
			</div>
		)
	} else {
		return (
			<div className="browseContainer">
				<Browse />
			</div>
		)
	}
}
}

const mapStateToProps = state => {
	return {
		browsePending: state.browseReducer.browsePending,
		token: state.userReducer.token
	}
}

export default connect(mapStateToProps)(BrowsePage)