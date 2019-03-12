import React from 'react';
import { connect } from 'react-redux';
import { toggleIsPlaying } from '../../actions/songActions';

const MainHeader = ({ dispatch, title, isPlaying }) => {
	const mainTogglePlay = () => {
		isPlaying ? dispatch(toggleIsPlaying(false)) : 
			dispatch(toggleIsPlaying(true))
	}
	return (
		<div>
			<h1 className="title">{title}</h1>
			{(title === "Browse Categories" || title === "Home Page") ? "" : 
					<button className="green-play-button" onClick={mainTogglePlay}>
						{isPlaying ? "PAUSE" : "PLAY"}
					</button>}
		</div>
	)
}
const mapStateToProps = state => {
	return {
		title: state.titleReducer.title,
		isPlaying: state.songsReducer.isPlaying
	}
}

export default connect(mapStateToProps)(MainHeader)
