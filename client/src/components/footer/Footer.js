import React from 'react';
import { connect } from 'react-redux';
import PlayButton from '../icons/PlayIconSVG';
import { toggleIsPlaying } from '../../actions/songActions';
import { setNowPlaying } from '../../actions/songActions';
import SongControls from '../songControls/SongControls';

const Footer = ({ dispatch, isPlaying, nowPlaying, albumImage }) => {
	
	const mainTogglePlay = () => {
		isPlaying ? dispatch(toggleIsPlaying(false)) : 
			dispatch(toggleIsPlaying(true))
	}
	const stepBack = () => {
		dispatch(toggleIsPlaying(false))
		// dispatch(setNowPlaying(nowPlaying.preview_url));
		console.log(nowPlaying.preview_url)
	}
  return (
    <div className="footer-container">
    	<div className="footer-play-button-container">
				<i className="fas fa-step-backward step" onClick={stepBack}></i>
	    	{!isPlaying ?
						<span className="footer-play-button" onClick={mainTogglePlay}>
							<i className="far fa-play-circle"></i>
						</span> : 
						<span className="footer-play-button" onClick={mainTogglePlay}>
							<i className="far fa-pause-circle"></i>
							</span>
				}
				<i className="fas fa-step-forward step"></i>
				<SongControls />
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