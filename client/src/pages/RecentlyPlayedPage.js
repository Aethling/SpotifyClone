import React, { Component } from 'react';
import { fetchRecentlyPlayed } from '../actions/recentlyPlayed';
import { connect } from 'react-redux';
// import Spotify from 'spotify-web-api-js';

// const spotifyWebApi = new Spotify();


class RecentlyPlayedPage extends Component {

	componentDidMount() {
		this.props.dispatch(fetchRecentlyPlayed(this.props.token))
	}
	 
	render() {
		if (this.props.fetchSongsPending) {
				return (
				<div>
					<p>Loading</p>
				</div>
			)
		} else {
			return (
				<div>
					<ul>
						{this.props.recentSongs.items.map((item, index) => {
							return (
								<li>
									{item.track.artists[0].name}
								</li>
							)
						})
						}
					</ul>
				</div>
			)
	}
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