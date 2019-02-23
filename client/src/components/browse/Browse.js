import React from 'react';
import { connect } from 'react-redux';

const Browse = ({ token, browseCategories }) => {

		const renderCategories = () => {
			return browseCategories.items.map((item, i) => {
				return (
					<div className="parent" key={i}>
						<div className="child">
							<div className="browseIcon" style={{backgroundImage: `url(${item.icons[0].url})`}}/>
						</div>
					</div>
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
