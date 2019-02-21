import React from 'react';
import { connect } from 'react-redux';

const Header = (props) => {
			// <img src={this.props.userImg} alt="user pic"/>
	return (
		<div>
			<h2>{props.user.country}</h2>
		</div>
	)
}
// const mapStateToProps = state => {
// 	return {
// 		userName: state.userReducer.user.country,
// 		isUser: state.userReducer.user
// 		// userImg: state.userReducer.user.images[0].url 
// 	}
// }
// export default connect(mapStateToProps)(Header);
export default Header;