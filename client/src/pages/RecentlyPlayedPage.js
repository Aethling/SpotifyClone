import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { fetchRecentlyPlayed } from '../actions/recentlyPlayed';
import { changeTitle } from '../actions/titleActions';
import { setNowPlaying } from '../actions/songActions';
import { toggleIsPlaying } from '../actions/songActions';
import SongList from '../components/songList/SongList';
import Sound from 'react-sound';

class RecentlyPlayedPage extends Component {

	componentDidMount() {
		this.props.dispatch(fetchRecentlyPlayed(this.props.token))
		this.props.dispatch(changeTitle('Recently Played'))
	}

	onItemClick = trackUrl => {
		// !this.props.nowPlaying && this.props.dispatch(setNowPlaying(trackUrl));
		this.props.dispatch(setNowPlaying(trackUrl));
		this.props.isPlaying ? this.props.dispatch(toggleIsPlaying(false)) : 
			this.props.dispatch(toggleIsPlaying(true))

	}
 	
	render() {
		return (
			<div>
				{
					!this.props.fetchSongsPending && <SongList onItemClick={this.onItemClick}/>
				} 
				{
					!this.props.fetchSongsPending &&
				<Sound url={this.props.nowPlaying}
							playStatus={this.props.isPlaying ? Sound.status.PLAYING : Sound.status.PAUSED}
							playFromPosition={300}
				/>
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
			isPlaying: state.songsReducer.isPlaying
		};
	};
export default connect(mapStateToProps)(RecentlyPlayedPage);