import React, { Component } from 'react';
import { connect } from 'react-redux';

class SongControls extends Component {
	//start with 0 time in state
	//function that counts up from 0 to 30 every second
	//Every time the second tics up, set state to that number
	//console log the state
	state = {
		elapsedTime: 0
	}
	componentDidUpdate(prevProps, prevState) {
		if (prevProps.isPlaying !== this.props.isPlaying) {
			this.calculateTime();
			}
	}
	calculateTime() {
		const intervalID = setInterval(() => {
			if (this.state.elapsedTime < 30) {
				this.setState({
					elapsedTime: this.state.elapsedTime + 1
				})
			}
			console.log(this.state)
			}, 1000)
	}
render() {
	return (
		<div className='song-progress-container'>
			<p className='timer-start'></p>
			<div className='song-progress'>
				<div className='song-expired'style={{width: this.state.elapsedTime * 16.66}}></div>
			</div>
			<p className='timer-end'></p>
		</div>
	)
}
}
const mapStateToProps = state => {
	return {
		isPlaying: state.songsReducer.isPlaying
	}
}

export default connect(mapStateToProps)(SongControls);