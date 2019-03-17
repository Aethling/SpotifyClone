import React, { Component } from 'react';
import { changeTitle } from '../actions/titleActions';
import { connect } from 'react-redux';
import { fetchSongs } from '../actions/songActions';
import { setNowPlaying } from '../actions/songActions';
import { toggleIsPlaying } from '../actions/songActions';
import { selectedAlbumImage } from '../actions/songActions';
import { fetchSelectedArtist } from '../actions/artistActions';
import { isSelectAlbum } from '../actions/albumActions';
import { isArtistSelected } from '../actions/artistActions';
import SongPlayer from '../components/SongPlayer';
import Artists from '../components/artists/Artists';
import CurrentAlbum from '../components/albums/CurrentAlbum';


class ArtistsPage extends Component {

	componentDidMount() {
		this.props.dispatch(changeTitle('Artists'))
		this.props.dispatch(fetchSongs(this.props.token))
	}

	selectedArtist = null

	handleArtistClick = (index) => {
		this.selectedArtist = this.props.artists.artists[index].id
		this.props.dispatch(fetchSelectedArtist(this.props.token, this.selectedArtist));
		this.props.dispatch(isSelectAlbum(false))
		this.props.dispatch(isArtistSelected(true))
	}
	componentWillUnmount() {
		this.props.dispatch(isArtistSelected(false));
	}
	
	onItemClick = (trackUrl, index) => {
		!this.props.nowPlaying && this.props.dispatch(setNowPlaying(trackUrl));
		this.props.dispatch(setNowPlaying(trackUrl));
		this.props.isPlaying ? this.props.dispatch(toggleIsPlaying(false)) : 
			this.props.dispatch(toggleIsPlaying(true))
		this.props.dispatch(selectedAlbumImage(this.props.selectedArtistTracks[index].album.images[2].url))
	}
	render() {
		return (
			<div>
			{(this.props.isArtistSelected && this.props.selectedArtistTracks) ? 
				([<CurrentAlbum songs={this.props.selectedArtistTracks}
												onItemClick={this.onItemClick} 
												key="one"/>,
					<SongPlayer key="two"/> ]) :
				 <Artists handleArtistClick={this.handleArtistClick}/>
			}
				</div>
		)
	}
}
const mapStateToProps = state => {
		return {
			token: state.userReducer.token,
			title: state.titleReducer.title,
			artists: state.artistsReducer.artists,
			isPlaying: state.songsReducer.isPlaying,
			nowPlaying: state.songsReducer.nowPlaying,
			isArtistSelected: state.artistsReducer.isArtistSelected,
			isAlbumSelected: state.albumsReducer.isAlbumSelected,
			artistsPending: state.artistsReducer.artistsPending,
			selectedArtistTracks: state.artistsReducer.selectedArtistTracks ? state.artistsReducer.selectedArtistTracks.tracks : ''
		};
	};
export default connect(mapStateToProps)(ArtistsPage)