import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { fetchRecentlyPlayed } from '../actions/recentlyPlayed';
import { changeTitle } from '../actions/titleActions';
import { setNowPlaying } from '../actions/songActions';
import { toggleIsPlaying } from '../actions/songActions';
import { selectedAlbumImage } from '../actions/songActions';
import { fetchAlbums } from '../actions/albumActions';
import SongList from '../components/songList/SongList';
import Sound from 'react-sound';
import SongPlayer from '../components/SongPlayer';

class RecentlyPlayedPage extends Component {

	componentDidMount() {
		this.props.dispatch(fetchRecentlyPlayed(this.props.token))
		this.props.dispatch(changeTitle('Recently Played'))
		// this.props.dispatch(fetchAlbums(this.props.token))
	}

	onItemClick = (trackUrl, index) => {
		// !this.props.nowPlaying && this.props.dispatch(setNowPlaying(trackUrl));
		this.props.dispatch(setNowPlaying(trackUrl));
		this.props.isPlaying ? this.props.dispatch(toggleIsPlaying(false)) : 
			this.props.dispatch(toggleIsPlaying(true))
		this.props.dispatch(selectedAlbumImage(this.props.recentSongs.items[index].track.album.images[2].url))

	}
 	
	render() {
		return (
			<div>
				{
					!this.props.fetchSongsPending && <SongList onItemClick={this.onItemClick}
																										songs={this.props.recentSongs}/>
				} 
				{
					!this.props.fetchSongsPending && <SongPlayer />
				}

			</div>
		)
		
	}
}	

	const mapStateToProps = state => {
		return {
			token: state.userReducer.token,
			recentSongs: state.songsReducer.recentSongs,
			fetchSongsPending: state.songsReducer.fetchSongsPending,
			nowPlaying: state.songsReducer.nowPlaying,
			albums: state.albumsReducer.albums,
			isPlaying: state.songsReducer.isPlaying
		};
	};
export default connect(mapStateToProps)(RecentlyPlayedPage);