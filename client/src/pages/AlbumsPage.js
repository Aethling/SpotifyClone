import React, { Component } from 'react';
import { changeTitle } from '../actions/titleActions';
import { connect } from 'react-redux';
import { fetchAlbums } from '../actions/albumActions';
import { isSelectAlbum } from '../actions/albumActions';
import { setNowPlaying } from '../actions/songActions';
import { toggleIsPlaying } from '../actions/songActions';
import { selectedAlbumImage } from '../actions/songActions';
import { isArtistSelected } from '../actions/artistActions';
import Albums from '../components/albums/Albums';
import CurrentAlbum from '../components/albums/CurrentAlbum';
import SongPlayer from '../components/SongPlayer';


class AlbumsPage extends Component {

	componentDidMount() {
		this.props.dispatch(changeTitle('Albums'))
		this.props.dispatch(fetchAlbums(this.props.token))
	}

	selectedAlbum = null;
	selectedAlbumSongs = null;

	handleAlbumClick = (index) => {
		this.selectedAlbum = this.props.albums.items[index].album;
		this.selectedAlbumSongs = this.props.albums.items[index].album.tracks.items;
		this.props.dispatch(isSelectAlbum(true));
		this.props.dispatch(isArtistSelected(false))
	}
	componentWillUnmount() {
		this.props.dispatch(isSelectAlbum(false))
	}
	onItemClick = trackUrl => {
		// !this.props.nowPlaying && this.props.dispatch(setNowPlaying(trackUrl));
		this.props.dispatch(setNowPlaying(trackUrl));
		this.props.isPlaying ? this.props.dispatch(toggleIsPlaying(false)) : 
			this.props.dispatch(toggleIsPlaying(true))
		this.props.dispatch(selectedAlbumImage(this.selectedAlbum.images[2].url))
	}
	render() {
		return (
			<div>
			{
				this.props.isAlbumSelected ? ([
					<CurrentAlbum songs={this.selectedAlbumSongs}
												onItemClick={this.onItemClick}
												key="one"/>,
					<SongPlayer key="two"/>
					]):
					<Albums handleAlbumClick={this.handleAlbumClick}/>
			}
			</div>
		)
	}
}
const mapStateToProps = state => {
		return {
			token: state.userReducer.token,
			title: state.titleReducer.title,
			albums: state.albumsReducer.albums,
			isAlbumSelected: state.albumsReducer.isAlbumSelected,
			isPlaying: state.songsReducer.isPlaying,
			nowPlaying: state.songsReducer.nowPlaying,
		};
	};
export default connect(mapStateToProps)(AlbumsPage)