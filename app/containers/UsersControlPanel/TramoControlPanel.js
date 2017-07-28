import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { UserActions } from 'actions';
import Tramo from 'components/Tramo';
// import TramoNavbar from './TramoNavbar';
import { withRouter } from 'react-router-dom'
import EditTramo from 'components/TramosComponent/EditTramo';
import AlertDelete from 'components/AlertDelete';

// ALL TODO  THIS IS A COPY!!!!!!!!
class TramoControlPanel extends  React.Component {
  constructor() {
    super()
    this.state = {
      editModalOpen: false,
      openAlert: false,
      currentTramo: null
    } }

  componentWillMount() {
    // this.props.actions.fetchTramos();
  }

  /*
  componentWillReceiveProps(nextProps) {
    console.log("componentWillReceiveProps");
    console.log("nextProps", nextProps);
    if(!nextProps.tramos) { return }
    if(!nextProps.tramos) { return }
    this.setState({tramos: nextProps.tramos.map((tramo) => tramo.id === nextProps.tramo.id)});
  }
  */


  cancelDestroy = () => {
    this.setState({openAlert: false})
  }

  reallyDestroyTramo = (evt) => {
    if(this.state.currentTramo) {
      console.log("reallyDestroyingTramo", this.state.currentTramo, id);
      let id = this.state.currentTramo.id;

    const data = JSON.stringify(
      {
        "id": id
    }
  );
  const configuration = new Headers({
    "Accept":"application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin":"*"
  })

  fetch("http://localhost:3000/api/tramos/destroy", {
    method: "POST",
    headers: configuration,
    body: data
  })
  .then(res => res.json())
  .then((value) => {
    this.setState({openAlert: false});
    this.props.actions.removeTramoFromArray(id);
    return {message: value};
  })
  .catch((res) => {
    console.log("Values sent", data);
    console.log("ERROR!", res);
  })

    } else {
      console.log("DestroyTramo. Current tramo is none");
    }
  }


  handleDestroyTramo = (evt) => {
    console.log("This evt traget", evt.target);
    console.log("This evt value", evt.target.value);
    const tramoId = evt.target.value;
    console.log("Destroying tramo", tramoId);
    this.setState({
        currentTramo: this.props.tramos.filter((tramo) => tramo.id == tramoId)[0],
        openAlert: true
      })
}

  handleUpdateTramo = (evt) => {
    console.log("This evt traget", evt.target);
    console.log("This evt value", evt.target.value);
    const tramoId = evt.target.value;
    this.setState({
        currentTramo: this.props.tramos.filter((tramo) => tramo.id == tramoId)[0],
        editModalOpen: true
      })
}

  render() {
    const {history, actions, tramos} = this.props;
    let { id } = this.state.currentTramo ? this.state.currentTramo.id : 0;
    return(
      <div>
      <AlertDelete
        tipo='usuario'
        id={id}
        reallyDestroy={() => this.reallyDestroyTramo(this.state.currentTramo.id)}
        cancelDestroy={this.cancelDestroy}
        open={this.state.openAlert} />

      <EditTramo
        open={this.state.editModalOpen}
        handleClose={() => this.setState({editModalOpen: false})}
        updateTramo={this.props.actions.updateTramo}
        tramo={this.state.currentTramo}
      />

      {tramos.map(tramo => {
        return(
          <Tramo
          key={tramo.id}
          onClickUpdate={this.handleUpdateTramo}
          onClickDestroy={this.handleDestroyTramo}
          tramo={tramo}
          actions={actions} />
        )
      })
    }
      </div>

    )
  }
}

TramoControlPanel.propTypes = {
  tramos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  tramos: state.concesion.Tramos
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(UserActions, dispatch)
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TramoControlPanel))
