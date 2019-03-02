import React, { Component } from 'react';
import { changeTitle } from '../actions/titleActions';
import { connect } from 'react-redux';
import { fetchAlbums } from '../actions/albumActions';
import { selectAlbum } from '../actions/albumActions';
import Albums from '../components/albums/Albums';
import CurrentAlbum from '../components/albums/CurrentAlbum';


class AlbumsPage extends Component {

	componentDidMount() {
		this.props.dispatch(changeTitle('Albums'))
		this.props.dispatch(fetchAlbums(this.props.token))
	}

	selectedAlbum = null;

	handleAlbumClick = (index) => {
		this.selectedAlbum = this.props.albums.items[index]
		this.props.dispatch(selectAlbum(true))
	}
	render() {
		return (
			<div>
			{
				this.props.isAlbumSelected ? <CurrentAlbum selectedAlbum={this.selectedAlbum}/> :
					<div>
						<h1>
							These are your saved albums
						</h1>
						<div>
							<Albums handleAlbumClick={this.handleAlbumClick}/>
						</div>
					</div>
			}
			</div>
		)
	}
}
const mapStateToProps = state => {
		return {
			token: state.userReducer.token,
			title: state.titleReducer.title,
			albums: state.albumsReducer.albums,
			isAlbumSelected: state.albumsReducer.isAlbumSelected
		};
	};
export default connect(mapStateToProps)(AlbumsPage)