import React, { Component } from 'react';
import { changeTitle } from '../actions/titleActions';
import { connect } from 'react-redux';

class ArtistsPage extends Component {

	componentDidMount() {
		this.props.dispatch(changeTitle('Artists'))
	}
	render() {
		return (
			<div>
				<h1>
					These are your saved artists
				</h1>
			</div>
		)
	}
}
const mapStateToProps = state => {
		return {
			title: state.titleReducer.title
		};
	};
export default connect(mapStateToProps)(ArtistsPage)