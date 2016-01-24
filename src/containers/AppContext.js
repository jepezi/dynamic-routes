import React, { Component, PropTypes } from 'react';

class AppContext extends Component {
  getChildContext () {
    return {
      state: this.props.state,
      dispatch: (action) => this.props.onDispatch(action)
    }
  }

  render () {
    return this.props.children
  }
}

AppContext.propTypes = {
  state: PropTypes.object,
  onDispatch: PropTypes.func,
};

AppContext.childContextTypes = {
  state: PropTypes.object,
  dispatch: PropTypes.func,
}

export default AppContext;
