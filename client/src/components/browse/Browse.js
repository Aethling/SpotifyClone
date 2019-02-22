import React from 'react';
import { connect } from 'react-redux';

const Browse = ({ token, browseCategories }) => {

		const renderCategories = () => {
			return browseCategories.items.map((item, i) => {
				return (
					<img className="browseIcon" key={i} src={item.icons[0].url} />
				)
			})
		};	
			
	return (
		<div>
			{
				browseCategories && renderCategories()
			}
		</div>
	);
};

const mapStateToProps = state => {
	return {
		token: state.userReducer.token,
		browseCategories: state.browseReducer.browseCategories ? 
			state.browseReducer.browseCategories.categories : ''
	}
}

export default connect(mapStateToProps)(Browse);
