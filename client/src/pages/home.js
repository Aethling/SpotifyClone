import React from 'react';

const Home = (props) => {
	return (
		<div>
    	{props.myData ? <img src={props.myData.images[0].url}/> : <h2>Loading</h2>  }
		</div>
	)
}

export default Home;