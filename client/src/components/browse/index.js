import Browse from './Browse';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const mapStateToProps = state => {
	return {
		token: state.userReducer.token,
		browseCategories: state.browseReducer.categories
	}
}

const mapDispatchToProps = dispatch => {
	return bindActionCreators(dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Browse);