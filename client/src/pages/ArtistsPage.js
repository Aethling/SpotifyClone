import React, { Component } from 'react';
import { changeTitle } from '../actions/titleActions';
import { connect } from 'react-redux';
import { fetchSongs } from '../actions/songActions';
import { setNowPlaying } from '../actions/songActions';
import { toggleIsPlaying } from '../actions/songActions';
import { selectedAlbumImage } from '../actions/songActions';
import { fetchSelectedArtist } from '../actions/artistActions';
// import Artists from '../components/artists/Artists';
import SongPlayer from '../components/SongPlayer';
import Artists from '../components/artists/Artists';
import SongList from '../components/songlist/Songlist';


class ArtistsPage extends Component {

	componentDidMount() {
		this.props.dispatch(changeTitle('Artists'))
		this.props.dispatch(fetchSongs(this.props.token))
	}

	selectedArtist = null

	handleArtistClick = (index) => {
		this.selectedArtist = this.props.artists.artists[index].id
		this.props.dispatch(fetchSelectedArtist(this.props.token, this.selectedArtist));
		console.log(this.props.selectedArtistTracks);
		// this.props.dispatch(isSelectAlbum(true))
	}
	// componentWillUnmount() {
	// 	this.props.dispatch(isSelectAlbum(false))
	// }
	onItemClick = trackUrl => {
		// !this.props.nowPlaying && this.props.dispatch(setNowPlaying(trackUrl));
		// this.props.dispatch(setNowPlaying(trackUrl));
		// this.props.isPlaying ? this.props.dispatch(toggleIsPlaying(false)) : 
		// 	this.props.dispatch(toggleIsPlaying(true))
		// this.props.dispatch(selectedAlbumImage(this.selectedAlbum.album.images[2].url))
	}
	render() {
							// <Artists />
		return (
			<div>
			{!this.props.isArtistSelected && <Artists handleArtistClick={this.handleArtistClick}/>  
			// <SongList songs={this.props.selectedArtistTracks.tracks}/>
		}
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
			isArtistSelected: state.artistsReducer.isArtistSelected,
			selectedArtistTracks: state.artistsReducer.selectedArtistTracks
		};
	};
export default connect(mapStateToProps)(ArtistsPage)