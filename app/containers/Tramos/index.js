import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { UserActions } from 'actions';
import TramosComponent from 'components/TramosComponent';

// ALL TODO  THIS IS A COPY!!!!!!!!
const Tramos = ({concesion, user, actions}) => (
      <div>
        <TramosComponent
          user={user}
          concesion={concesion}
          actions={actions} />
        </div>
)

Tramos.propTypes = {
  actions: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  segmentos: state.concesion.Segmentos,
  concesion: state.concesion,
  user: state.user
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(UserActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Tramos)
