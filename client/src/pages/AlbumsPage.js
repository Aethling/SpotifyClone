import React, { Component } from 'react';
import { changeTitle } from '../actions/titleActions';
import { connect } from 'react-redux';
import { fetchAlbums } from '../actions/albumActions';
import Albums from '../components/albums';

class AlbumsPage extends Component {

	componentDidMount() {
		this.props.dispatch(changeTitle('Albums'))
		this.props.dispatch(fetchAlbums(this.props.token))
	}
	render() {
		return (
			<div>
				<h1>
					These are your saved albums
				</h1>
				<div>
					<Albums/>
				</div>
			</div>
		)
	}
}
const mapStateToProps = state => {
		return {
			token: state.userReducer.token,
			title: state.titleReducer.title,
			albums: state.albumsReducer.albums
		};
	};
export default connect(mapStateToProps)(AlbumsPage)