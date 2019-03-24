import React from 'react';

const SongProgressBar = (props) => {

  return (
    	<div className='song-progress-container'>
	        <p className='timer-start'></p>
	        <div className='song-progress'>
	          <div className='song-expired'>
	          </div>
		      </div>
    	</div>
  )
}

export default SongProgressBar;