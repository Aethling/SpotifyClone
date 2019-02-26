import React from 'react';
import { connect } from 'react-redux';

const MainHeader = ({ title }) => {

	return (
		<div>
			<h1 className="title">{title}</h1>
		</div>
	)
}
const mapStateToProps = state => {
	return {
		title: state.titleReducer.title
	}
}

export default connect(mapStateToProps)(MainHeader)
