import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getSearchResults, resetSearch } from "../../../actions/search_actions";

import SearchBar from './search_bar';

const msp = state => {
  return {
    search: state.search,
  }
};

const mdp = dispatch => {
  return {
    resetSearch: () => dispatch(resetSearch()),
    getSearchResults: () => dispatch(getSearchResults()),
  }
};

export default withRouter(connect(msp, mdp)(SearchBar));
