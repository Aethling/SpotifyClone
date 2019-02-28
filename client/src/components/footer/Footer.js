import React from 'react';
import { connect } from 'react-redux';
import PlayButton from '../icons/PlayIconSVG';
import { toggleIsPlaying } from '../../actions/songActions';

const Footer = ({ dispatch, isPlaying }) => {
	const mainTogglePlay = () => {
		isPlaying ? dispatch(toggleIsPlaying(false)) : 
			dispatch(toggleIsPlaying(true))
	}
  return (
    <div className="footer-container">
    	<div className="footer-play-button-container" onClick={mainTogglePlay}>
	    	<PlayButton />
    	</div>
    </div>
  )
}

const mapStateToProps = state => {
	return {
		isPlaying: state.songsReducer.isPlaying
	}
}

export default connect(mapStateToProps)(Footer)