import React from 'react';
import { connect } from 'react-redux';
import PlayButton from '../icons/PlayIconSVG';
import { toggleIsPlaying } from '../../actions/songActions';

const Footer = ({ dispatch, isPlaying, nowPlaying }) => {
	const mainTogglePlay = () => {
		isPlaying ? dispatch(toggleIsPlaying(false)) : 
			dispatch(toggleIsPlaying(true))
	}
  return (
    <div className="footer-container">
    	<div className="footer-play-button-container" onClick={mainTogglePlay}>
	    	<PlayButton />
    	</div>
    	<div className="footer-displaySongInfo-container">
    		{
	    		nowPlaying &&
	    			<div>
		    			<p>{nowPlaying.name}</p>
			    		<p className="footer-artist-name">{nowPlaying.artists[0].name}</p>
		    		</div>
	    	}
    	</div>
    </div>
  )
}

const mapStateToProps = state => {
	return {
		isPlaying: state.songsReducer.isPlaying,
		nowPlaying: state.songsReducer.nowPlaying
	}
}

export default connect(mapStateToProps)(Footer)