import React, { Component } from 'react';
import { Link }from 'react-router-dom';

class SideMenu extends Component {
	

	render () {
		return (
			<ul className='side-menu-container'>
				<li className='side-menu-item home'><Link to="/">Home</Link></li>
				<li className='side-menu-item browse'><Link to="/browse">Browse</Link></li>
	      <li className='side-menu-item radio'>Radio</li>
	      <h3 className='user-library-header'>Your Library</h3>
	      <li className="side-menu-item"><Link to="/recent">Recently Played</Link></li>
	      <li className="side-menu-item">Songs</li>
	      <li className="side-menu-item"><Link to="/albums">Albums</Link></li>

	      <li className="side-menu-item"><Link to="/artists">Artists</Link></li>
	      
	      <h3 className="user-library-header">Playlists</h3>
	      <li className="side-menu-item">Discover Weekly</li>
	      <li className="side-menu-item">Your Playlist</li>
	    </ul>
		)
	}
}

export default SideMenu;