import React from 'react';
import { connect } from 'react-redux';

const Albums = ({ token, albums }) => {
	const renderSongs = (album) => {
		
	}

	const renderAlbums = () => {
		return albums.items.map((item, i) => {
			return (
				<div className="album-list" onClick={() => renderSongs(item.album)} key={i}>
					<img className="album-images" src={item.album.images[1].url}/>
						<div className="album-name"> {item.album.name}</div>
						<div className="album-artist-name"> {item.album.artists[0].name}</div>
				</div>
			)
		})
	};	
			
	return (
		<div className='album-container'>
			{
				albums && renderAlbums()
			}
		</div>
	);
};

const mapStateToProps = state => {
	return {
		token: state.userReducer.token,
		albums: state.albumsReducer.albums ? 
			state.albumsReducer.albums : ''
	}
}

export default connect(mapStateToProps)(Albums);
