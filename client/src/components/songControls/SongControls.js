import React, { Component } from 'react';

class SongControls extends Component {
    state = {
        elapsedTime: 0
    }
    render() {
        return (
					<div className='song-progress-container'>
						<p className='timer-start'></p>
						<div className='song-progress'>
							<div className='song-expired'></div>
						</div>
						<p className='timer-end'></p>
					</div>
    )
}
}
export default SongControls;