import React, { Component } from 'react';
import { changeTitle } from '../actions/titleActions';
import { connect } from 'react-redux';
import { fetchAlbums } from '../actions/albumActions';
import { isSelectAlbum } from '../actions/albumActions';
import { setNowPlaying } from '../actions/songActions';
import { toggleIsPlaying } from '../actions/songActions';
import { selectedAlbumImage } from '../actions/songActions';
import Albums from '../components/albums/Albums';
import CurrentAlbum from '../components/albums/CurrentAlbum';
import SongPlayer from '../components/SongPlayer';


class AlbumsPage extends Component {

	componentDidMount() {
		this.props.dispatch(changeTitle('Albums'))
		this.props.dispatch(fetchAlbums(this.props.token))
	}
	//make a back button that can dispatch this action
		// this.props.dispatch(selectAlbum(false));

	selectedAlbum = null

	handleAlbumClick = (index) => {
		this.selectedAlbum = this.props.albums.items[index]
		this.props.dispatch(isSelectAlbum(true))
	}
	componentWillUnmount() {
		this.props.dispatch(isSelectAlbum(false))
	}
	onItemClick = trackUrl => {
		// !this.props.nowPlaying && this.props.dispatch(setNowPlaying(trackUrl));
		this.props.dispatch(setNowPlaying(trackUrl));
		this.props.isPlaying ? this.props.dispatch(toggleIsPlaying(false)) : 
			this.props.dispatch(toggleIsPlaying(true))
		this.props.dispatch(selectedAlbumImage(this.selectedAlbum.album.images[2].url))
	}
	render() {
		return (
			<div>
			{
				this.props.isAlbumSelected ? ([
					<CurrentAlbum selectedAlbum={this.selectedAlbum}
												onItemClick={this.onItemClick}
												key="one"/>,
					<SongPlayer key="two"/>
					]):
					<div>
						<h1>
							These are your saved albums
						</h1>
						<div>
							<Albums handleAlbumClick={this.handleAlbumClick}/>
						</div>
					</div>
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