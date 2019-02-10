import React from 'react';

const Browse = (props) => {
	return (
		<div>
			{props.browseData.map((category, index) => <img key={index} className="browseIcon" src={category.icons[0].url}/> )}
		</div>
	)
}
export default Browse;