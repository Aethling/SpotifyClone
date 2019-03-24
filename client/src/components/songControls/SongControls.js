import React, { Component } from 'react';

class SongControls extends Component {
    state = {
        elapsedTime: 0
		}
		componentDidUpdate(prevProps) {
			// if (prevProps.elapsedTime === 0) {
			// 	this.calculateTime();
			// 	console.log("woopee")
			// }
			console.log(this.state)
			// this.calculateTime()
		}
		
		calculateTime() {
			const intervalID = setInterval(() => {
				if (this.state.elapsedTime === 30) {
					clearInterval(this.state.intervalID);
				} else {
					console.log(this.state.elapsedTime + 1)
					this.setState({
						elapsedTime: this.state.elapasedTime + 1
					})
				}
			}
			)
		}
    render() {
        return (
					<div className='song-progress-container'>
						<p className='timer-start'></p>
						<div className='song-progress'>
							<div className='song-expired'style={{width: this.state.elapsedTime}}></div>
						</div>
						<p className='timer-end'></p>
					</div>
    )
}
}
export default SongControls;