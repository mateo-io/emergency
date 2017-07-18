import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class EnsureLoggedIn extends React.Component {


  render() {
    const { isLoggedIn } = this.props
    console.log('loggedin???', isLoggedIn)
    if (isLoggedIn) {
      return this.props.children
    } else {
      return(<Redirect to="/login" />)
    }
  }
}

// Grab a reference to the current URL. If this is a web app and you are
// using React Router, you can use `ownProps` to find the URL. Other
// platforms (Native) or routing libraries have similar ways to find
// the current position in the app.
function mapStateToProps(state, ownProps) {
  return {
    isLoggedIn: state.user.cedula,
  }
}

export default connect(mapStateToProps)(EnsureLoggedIn)
