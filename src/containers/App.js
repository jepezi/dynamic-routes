import React, { Component, PropTypes } from 'react';

import AppContext from './AppContext';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { posts: null }
  }

  handleDispatch (action) {
    // Handle dispatched actions by changing state
    if (action.type === 'POSTS/GET')
      this.setState({ posts: action.payload })
  }

  render() {
    return <AppContext
      state={this.state}
      onDispatch={(action) => this.handleDispatch(action)}
    >
      <div>
        <Nav />
        {this.props.children}
        <hr />
        <Footer />
      </div>
    </AppContext>;
  }
}

export default App;
