import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPlaylistSongs } from '../actions/playlistActions';


class PlaylistsPage extends Component {
	fetchSongs() {
		this.props.dispatch(fetchPlaylistSongs(this.props.token, this.props.playlistID))
	}
	render() {
		return (
			<div>
				{this.props.playlistID && this.fetchSongs()}
				<p>this is the playlists page</p>
			</div>
		);
	}
}
const mapStateToProps = state => {
	return {
		playlistID: state.playlistsReducer.playlistID,
		token: state.userReducer.token
	}
}
export default connect(mapStateToProps)(PlaylistsPage);
