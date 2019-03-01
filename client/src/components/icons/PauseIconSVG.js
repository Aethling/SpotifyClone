import React from 'react'

const PauseButton = () => (
	<div className="play-button-container">
		<svg height="34" viewBox="0 0 34 34" width="34" xmlns="http://www.w3.org/2000/svg">
		<circle cx="12" cy="12" fill="white" r="10" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
		<line fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="10" x2="10" y1="15" y2="9"/>
		<line fill="white" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="14" x2="14" y1="15" y2="9"/></svg>
	</div>
)

export default PauseButton;