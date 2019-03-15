import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { changeTitle } from '../../actions/titleActions';
import { fetchPlaylists } from '../../actions/playlistActions';
import { fetchPlaylistSongs } from '../../actions/playlistActions';
import { currentPlaylistID } from '../../actions/playlistActions';
import { setPlaylistImage } from '../../actions/playlistActions';

class Playlists extends Component {

	componentDidMount() {
		this.props.dispatch(fetchPlaylists(this.props.token))
	}
	
	renderPlaylists = () => {
		return this.props.playlists.items.map((item, index) => {
			const actions = () => {
				this.props.dispatch(changeTitle(item.name));
				this.props.dispatch(currentPlaylistID(item.id));
				this.props.dispatch(fetchPlaylistSongs(this.props.token, item.id));
				this.props.dispatch(setPlaylistImage(item.images[0].url));
			}
			return (
			<li className={this.props.title === item.name ? 'side-menu-item active' : 'side-menu-item'} 
					key={index} 
					onClick={actions}>
				<Link to="/playlists">{item.name}</Link>
			</li>
			)
		})
	}

	render() {
	  return (
	    <div className="side-menu-container">
	    	<h3 className="user-library-header">Playlists</h3>
	      <li className="side-menu-item">Discover Weekly</li>
	      {this.props.playlists && this.renderPlaylists()}
	    </div>
	  )
}
}
const mapStateToProps = state => {
	return {
		isLoggedIn: state.userReducer.isLoggedIn,
		token: state.userReducer.token,
		title: state.titleReducer.title,
		playlists: state.playlistsReducer.playlists ? state.playlistsReducer.playlists : '',
		playlistsPending: state.playlistsReducer.playlistsPending
	}
}

export default connect(mapStateToProps)(Playlists);
			