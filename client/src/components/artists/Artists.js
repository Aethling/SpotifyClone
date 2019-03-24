import React from 'react';
import { connect } from 'react-redux';


const Artists = ({ token, artists, handleArtistClick }) => {

	const renderArtists = () => {
		return artists.map((item, index) => {
			return (
				<div className="artist-list" onClick={() => handleArtistClick(index)} key={index}>
					<img className="artist-images" src={item.images[1].url}/>
						<div className="artist-name"> {item.name}</div>
				</div>
			)
		})
	};	
			
	return (
		<div className='album-container'>
			{
				artists && renderArtists()
			}
		</div>
	);
};

const mapStateToProps = state => {
	return {
		token: state.userReducer.token,
		artists: state.artistsReducer.artists  ? 
			state.artistsReducer.artists.artists : ''
	}
}

export default connect(mapStateToProps)(Artists);
