import React, { Component } from 'react';
import { Link }from 'react-router-dom';
import { connect } from 'react-redux';

const SideMenu = ({ title }) => {

	const menu = [
		{
			title: 'Recently Played',
			name: '/recent'
		},
		{
			title: 'Albums',
			name: '/albums'
		},
		{
			title: 'Artists',
			name: '/artists'
		}
	]
	const renderListItems = (menu, index) => {
		return menu.map(item => (
			<li className={title === item.title ? 'side-menu-item active' : 'side-menu-item'} key={item.title}>
				<Link to={item.name}>{item.title}</Link>
			</li>
			))
	}
		return (
			<ul className='side-menu-container'>
				<li className={title === 'Home Page' ? 'side-menu-item active': 'side-menu-item'}><Link to="/">Home</Link></li>
				<li className={title === 'Browse Categories' ? 'side-menu-item active': 'side-menu-item'}><Link to="/browse">Browse</Link></li>
	      <h3 className='user-library-header'>Your Library</h3>
	      {renderListItems(menu)}
	    </ul>
		)
	}
const mapStateToProps = state => {
	return {
		title: state.titleReducer.title
	}
}

export default connect(mapStateToProps)(SideMenu);