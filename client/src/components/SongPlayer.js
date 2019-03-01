import React from 'react';
import { connect } from 'react-redux';
import Sound from 'react-sound'

const SongPlayer = ({recentSongs, fetchSongsPending, nowPlaying, isPlaying}) => {
	return (
		<div>
		{ 
			nowPlaying && <Sound url={nowPlaying.preview_url}
						playStatus={isPlaying ? Sound.status.PLAYING : Sound.status.PAUSED}
						playFromPosition={300} /> 

		}
		</div>
	)

}
const mapStateToProps = state => {
	return {
		recentSongs: state.songsReducer.recentSongs,
		fetchSongsPending: state.songsReducer.fetchSongsPending,
		nowPlaying: state.songsReducer.nowPlaying,
		isPlaying: state.songsReducer.isPlaying
	}
}

export default connect(mapStateToProps)(SongPlayer);