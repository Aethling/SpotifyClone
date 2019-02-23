import React, { Component } from 'react';
import { fetchRecentlyPlayed } from '../actions/recentlyPlayed';
import { connect } from 'react-redux';
import { changeTitle } from '../actions/titleActions';
import SongList from '../components/songList/SongList';

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