import React, { Component } from 'react';
import { fetchRecentlyPlayed } from '../actions/recentlyPlayed';
import { connect } from 'react-redux';
import { changeTitle } from '../actions/titleActions';


class RecentlyPlayedPage extends Component {

	componentDidMount() {
		this.props.dispatch(fetchRecentlyPlayed(this.props.token))
		this.props.dispatch(changeTitle('Recently Played'))
	}

	renderSongs() {
		return this.props.recentSongs.items.map((item, index) => {
							return (
								<li key={index}>
									{item.track.artists[0].name}
								</li>
							)
						})
	}	 	
	render() {
		return (
			<div>
				<ul>
				{
					!this.props.fetchSongsPending && this.renderSongs()
				}
				</ul>
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