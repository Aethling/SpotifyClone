import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

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
				clearInterval(this.state.intervalID)
				if (this.props.isPlaying) {
					this.calculateTime();
					this.setState({
						elapsedTime: 0
					})
				}
		}
	}
	calculateTime() {
		const intervalID = setInterval(() => {
			if (this.state.elapsedTime < 30 && this.props.isPlaying) {
				this.setState({
					elapsedTime: this.state.elapsedTime + 1
				})
			}
			this.setState({
				intervalID: intervalID
			})
		}, 1000)
	}
render() {
	return (
		<div className='song-progress-container'>
			<p className='timer-start'>{moment().minute(0).second(this.state.elapsedTime).format('m:ss')}</p>
			<div className='song-progress'>
				<div className='song-expired'style={{width: this.state.elapsedTime * 14.9}}></div>
			</div>
			<p className='timer-end'>{moment().minute(0).second(30 - this.state.elapsedTime).format('m:ss')}</p>
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