import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { SearchActions } from 'actions';
import CallList from 'components/CallList';

// ALL TODO  THIS IS A COPY!!!!!!!!
const Search = ({calls, actions}) => (
  <div>
    <CallList calls={calls} actions={actions} />
  </div>
)

Search.propTypes = {
  calls: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  calls: state.calls
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(SearchActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Search)
