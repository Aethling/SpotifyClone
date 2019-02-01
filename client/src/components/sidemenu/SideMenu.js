import React from 'react';

const SideMenu = () => {
	return (
		<ul className='side-menu-container'>
			<li className='side-menu-item browse'>Browse</li>
      <li className='side-menu-item radio'>Radio</li>
      <h3 className='user-library-header'>Your Library</h3>
      <li className="side-menu-item">Recently Played</li>
      <li className="side-menu-item">Songs</li>
      <li className="side-menu-item">Albums</li>
      <li className="side-menu-item">Artists</li>
      <h3 className="user-library-header">Playlists</h3>
      <li className="side-menu-item">Discover Weekly</li>
      <li className="side-menu-item">Your Playlist</li>
    </ul>
	)
}
export default SideMenu;