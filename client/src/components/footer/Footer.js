import React from 'react';
import { connect } from 'react-redux';
import PlayButton from '../icons/PlayIconSVG';
import { toggleIsPlaying } from '../../actions/songActions';
import Sound from 'react-sound';

const Footer = ({ dispatch, isPlaying, nowPlaying, fetchSongsPending }) => {
	const mainTogglePlay = () => {
		isPlaying ? dispatch(toggleIsPlaying(false)) : 
			dispatch(toggleIsPlaying(true))
	}
  return (
    <div className="footer-container">
    	<div className="footer-play-button-container" onClick={mainTogglePlay}>
	    	<PlayButton />
    	</div>
		// 	{
		// 	!fetchSongsPending &&
		// 		<Sound url={nowPlaying}
		// 			playStatus={isPlaying ? Sound.status.PLAYING : Sound.status.PAUSED}
		// 			playFromPosition={300}
		// 		/>
		}
    </div>
  )
}

const mapStateToProps = state => {
	return {
		fetchSongsPending: state.songsReducer.fetchSongsPending,
		nowPlaying: state.songsReducer.nowPlaying,
		isPlaying: state.songsReducer.isPlaying
	}
}

export default connect(mapStateToProps)(Footer)