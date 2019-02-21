import React from 'react';
import { connect } from 'react-redux';

const Header = ({user}) => {
	return (
		<div>
			<img src={user.images[0].url} alt="user pic"/>
			<h2>{user.display_name}</h2>
		</div>
	)
}
// const mapStateToProps = state => {
// 	return {
// 		userName: state.userReducer.user.display_name,
// 		userImg: state.userReducer.user.images[0].url 
// 	}
// }
// export default connect(mapStateToProps)(Header);
export default Header;