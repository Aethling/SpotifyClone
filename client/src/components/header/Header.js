import React from 'react';
// import { connect } from 'react-redux';

const Header = (props) => {
	return (
		<div className="header-container">
			<div className="header-user-container">
				<img className="user-image" src={props.user.images[0].url} alt="user pic"/>
				<span className="display-name">{props.user.display_name}</span>
			</div>
		</div>
	)
}

export default Header;