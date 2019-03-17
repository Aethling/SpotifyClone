import React from 'react';
import { connect } from 'react-redux';
import { isSelectAlbum } from '../../actions/albumActions';
import { msToTime } from '../../config/utils';

const CurrentAlbum = ({selectedAlbum, dispatch, onItemClick, isPlaying}) => {

	

	const renderSongs = () => {
		return selectedAlbum.album.tracks.items.map((item, index) => {
					return (
						<li className="songList-item-container" key={index}>
							<div className="buttons-container" onClick={() => onItemClick(item)}>
								{!isPlaying ?
									<span className="play-icon">
										<i className="far fa-play-circle"></i>
									</span> : 
									<span className="play-icon">
										<i className="far fa-pause-circle"></i>
									</span>
								}
							</div>
							<p className="songList-item">
								{item.name}
							</p>
							<p className="songList-item">
								{item.artists[0].name}
							</p>
							<p className="songList-item">
								{msToTime(item.duration_ms)}
							</p>
						</li>
					)
				})
	}
  		// <button }>Back to Albums</button>
  return (
  	<div className="songList-container">
		  	<i className="fas fa-arrow-left" onClick={() => dispatch(isSelectAlbum(false))}></i>
		  	<span className="back-arrow-text">Back to Albums</span>
				<div className="song-header-container">
					<div className="buttons-container"></div>
					<div className="song-header-item">Title</div>
					<div className="song-header-item">Album</div>
					<div className="song-header-item">Duration</div>
				</div>
					{renderSongs() }

		</div>
  )
}
const mapStateToProps = state => {
	return {
		isPlaying: state.songsReducer.isPlaying,
	}
}
export default connect(mapStateToProps)(CurrentAlbum);