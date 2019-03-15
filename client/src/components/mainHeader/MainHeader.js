import React from 'react';
import { connect } from 'react-redux';
import { toggleIsPlaying } from '../../actions/songActions';

const MainHeader = ({ dispatch, title, isPlaying, playlistImage }) => {
	const mainTogglePlay = () => {
		isPlaying ? dispatch(toggleIsPlaying(false)) : 
			dispatch(toggleIsPlaying(true))
	}
	return (
		<div>
			{(title === "Home Page" || title === "Browse Categories" || title === "Recently Played" || title === "Albums" || title === "Artists") ? 
				<div>
					<h1 className="title">{title}</h1>
					{(title === "Browse Categories" || title === "Home Page") ? "" : 
							<button className="green-play-button" onClick={mainTogglePlay}>
								{isPlaying ? "PAUSE" : "PLAY"}
							</button>}
				</div>
				:  
				<div className="playlist-title-container">
					<img className="playlist-image" src={playlistImage}/>
					<div className="title-container">
						<h1 className="title">{title}</h1>
						{(title === "Browse Categories" || title === "Home Page") ? "" : 
								<button className="green-play-button" onClick={mainTogglePlay}>
									{isPlaying ? "PAUSE" : "PLAY"}
								</button>}
					</div>
				</div>}
		</div>
	)
}
const mapStateToProps = state => {
	return {
		title: state.titleReducer.title,
		isPlaying: state.songsReducer.isPlaying,
		playlistImage: state.playlistsReducer.playlistImage
	}
}

export default connect(mapStateToProps)(MainHeader)
