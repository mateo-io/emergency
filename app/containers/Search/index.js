import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { SearchActions } from 'actions';

// ALL TODO  THIS IS A COPY!!!!!!!!
const Search = ({activeCalls, actions}) => (
  <div>
   This is search
  </div>
)

Search.propTypes = {
  activeCalls: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  activeCalls: state.calls
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(SearchActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Search)
