import React, { Component } from 'react';
import { fetchRecentlyPlayed } from '../actions/recentlyPlayed';
import { connect } from 'react-redux';
import { changeTitle } from '../actions/titleActions';
import SongList from '../components/songList/SongList';
import Sound from 'react-sound';

class RecentlyPlayedPage extends Component {

	componentDidMount() {
		this.props.dispatch(fetchRecentlyPlayed(this.props.token))
		this.props.dispatch(changeTitle('Recently Played'))
	}

 	
	render() {
		return (
			<div>
				{
					!this.props.fetchSongsPending && <SongList />
				} 
				{
					!this.props.fetchSongsPending &&
				<Sound url={this.props.recentSongs.items[0].track.preview_url}
							playStatus={Sound.status.PLAYING}
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
			fetchSongsPending: state.songsReducer.fetchSongsPending
		}
	}
export default connect(mapStateToProps)(RecentlyPlayedPage);