import React from 'react';
import { connect } from 'react-redux';
import PlayButton from '../icons/PlayIconSVG';
import { toggleIsPlaying } from '../../actions/songActions';

const Footer = ({ dispatch, isPlaying, nowPlaying, albumImage }) => {
	
	const mainTogglePlay = () => {
		isPlaying ? dispatch(toggleIsPlaying(false)) : 
			dispatch(toggleIsPlaying(true))
	}
  return (
    <div className="footer-container">
    	<div className="footer-play-button-container" onClick={mainTogglePlay}>
	    	{!isPlaying ?
						<span className="footer-play-button">
							<i className="far fa-play-circle"></i>
						</span> : 
						<span className="footer-play-button">
							<i className="far fa-pause-circle"></i>
							</span>
				}
    	</div>
    	<div className="footer-displaySongInfo-container">
    		{
	    		nowPlaying &&
	    			<div>
	    				<img className="footer-image" src={albumImage}/>
			    			<div className="footer-displayText-container">
				    			<p className="footer-song-name">{nowPlaying.name}</p>
					    		<p className="footer-artist-name">{nowPlaying.artists[0].name}</p>
				    		</div>
		    		</div>
	    	}
    	</div>
    </div>
  )
}

const mapStateToProps = state => {
	return {
		isPlaying: state.songsReducer.isPlaying,
		nowPlaying: state.songsReducer.nowPlaying,
		albumImage: state.albumsReducer.albumImage
	}
}

export default connect(mapStateToProps)(Footer)