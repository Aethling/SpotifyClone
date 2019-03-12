import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPlaylistSongs } from '../actions/playlistActions';
import { setNowPlaying } from '../actions/songActions';
import { toggleIsPlaying } from '../actions/songActions';
import { selectedAlbumImage } from '../actions/songActions';
import SongList from '../components/songList/SongList';
import SongPlayer from '../components/SongPlayer';

class PlaylistsPage extends Component {
	// fetchSongs() {
	// 	this.props.dispatch(fetchPlaylistSongs(this.props.token, this.props.playlistID))
	// }
	onItemClick = (trackUrl, index) => {
		// !this.props.nowPlaying && this.props.dispatch(setNowPlaying(trackUrl));
		this.props.dispatch(setNowPlaying(trackUrl));
		this.props.isPlaying ? this.props.dispatch(toggleIsPlaying(false)) : 
			this.props.dispatch(toggleIsPlaying(true))
		this.props.dispatch(selectedAlbumImage(this.props.playlistSongs.items[index].track.album.images[2].url))
	}
	render() {
				// {(this.props.playlistID && this.props.playlistIDPending) && this.fetchSongs()}
		return (
			<div>
				{
					!this.props.playlistSongsPending && <SongList onItemClick={this.onItemClick}
																											songs={this.props.playlistSongs}/>
				}
				{
					!this.props.playlistSongsPending && <SongPlayer/>
				}
			</div>
		);
	}
}
const mapStateToProps = state => {
	return {
		playlistID: state.playlistsReducer.playlistID,
		token: state.userReducer.token,
		nowPlaying: state.songsReducer.nowPlaying,
		albums: state.albumsReducer.albums,
		isPlaying: state.songsReducer.isPlaying,
		fetchSongsPending: state.songsReducer.fetchSongsPending,
		playlistSongsPending: state.playlistsReducer.playlistSongsPending,
		playlistSongs: state.playlistsReducer.playlistSongs ? state.playlistsReducer.playlistSongs : '',
		playlistIDPending: state.playlistsReducer.playlistIDPending
	}
}
export default connect(mapStateToProps)(PlaylistsPage);
