import React from 'react';
import { connect } from 'react-redux';
import PlayButton from '../icons/PlayIconSVG';
import PauseButton from '../icons/PauseIconSVG';

const SongList = ({ songs, onItemClick, isPlaying }) => {

	const renderSongs = () => {
		return songs.items.map((item, index) => {
							return (
								<li className="songList-item-container" key={index}>
									<div className="buttons-container" onClick={() => onItemClick(item.track.preview_url)}>
										<PlayButton/>
									</div>
									<p className="songList-item">
										{item.track.name}
									</p>
									<p className="songList-item">
										{item.track.artists[0].name}
									</p>
									<p className="songList-item">
										{item.track.album.name}
									</p>
									<p className="songList-item">
										{item.track.duration_ms}
									</p>
								</li>
							)
						})
	}
	return (
		<div className="songList-container">
				<div className="song-header-container">
					<div className="song-header-item">Title</div>
					<div className="song-header-item">Artist</div>
					<div className="song-header-item">Album</div>
					<div className="song-header-item">Time</div>
				</div>
					{ songs && renderSongs() }
		</div>
	)
} 	
const mapStateToProps = state => {
	return {
		songs: state.songsReducer.recentSongs,
		isPlaying: state.songsReducer.isPlaying
	}
}


export default connect(mapStateToProps)(SongList)
