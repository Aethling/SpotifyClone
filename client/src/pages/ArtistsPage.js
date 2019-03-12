import React, { Component } from 'react';
import { changeTitle } from '../actions/titleActions';
import { connect } from 'react-redux';
import { fetchArtists } from '../actions/artistActions';
import { setNowPlaying } from '../actions/songActions';
import { toggleIsPlaying } from '../actions/songActions';
import { selectedAlbumImage } from '../actions/songActions';
// import Artists from '../components/artists/Artists';
import SongPlayer from '../components/SongPlayer';


class ArtistsPage extends Component {

	componentDidMount() {
		this.props.dispatch(changeTitle('Artists'))
		this.props.dispatch(fetchArtists(this.props.token))
	}

	selectedArtist = null

	// handleAlbumClick = (index) => {
	// 	this.selectedArtist = this.props.albums.items[index]
	// 	this.props.dispatch(isSelectAlbum(true))
	// }
	// componentWillUnmount() {
	// 	this.props.dispatch(isSelectAlbum(false))
	// }
	// onItemClick = trackUrl => {
	// 	// !this.props.nowPlaying && this.props.dispatch(setNowPlaying(trackUrl));
	// 	this.props.dispatch(setNowPlaying(trackUrl));
	// 	this.props.isPlaying ? this.props.dispatch(toggleIsPlaying(false)) : 
	// 		this.props.dispatch(toggleIsPlaying(true))
	// 	this.props.dispatch(selectedAlbumImage(this.selectedAlbum.album.images[2].url))
	// }
	render() {
							// <Artists />
		return (
			<div>
			{
				// this.props.isArtistSelected ? ([
				// 	<CurrentAlbum selectedAlbum={this.selectedAlbum}
				// 								onItemClick={this.onItemClick}
				// 								key="one"/>,
				// 	<SongPlayer key="two"/> ]):
					
			}
			</div>
		)
	}
}
const mapStateToProps = state => {
		return {
			token: state.userReducer.token,
			title: state.titleReducer.title,
			artists: state.artistsReducer.artists,
			isPlaying: state.songsReducer.isPlaying,
			nowPlaying: state.songsReducer.nowPlaying,
		};
	};
export default connect(mapStateToProps)(ArtistsPage)