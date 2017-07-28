import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { UserActions } from 'actions';
import PostesComponent from 'components/PostesComponent';

// ALL TODO  THIS IS A COPY!!!!!!!!
const Postes = ({concesionName, user, tramos, actions}) => (
      <div>
        <PostesComponent
          user={user}
          concesionName={concesionName}
          tramos={tramos}
          actions={actions} />
        </div>
)

Postes.propTypes = {
  actions: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  tramos: state.concesion.Tramos,
  concesionName: state.concesion.name,
  user: state.user
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(UserActions, dispatch)
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Postes))
