import React, {Component} from 'react';
import logo from '../../logo.svg';
import '../../css/Header.css';

import PropTypes from 'prop-types';

 class Header extends Component{

  static propTypes = {
    appName: PropTypes.string.isRequired,

  }


   render(){
    const {appName} = this.props;
    
    return (
      <div className="Header">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {appName}
          </p>
          <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          >
          Learn React
          </a>
        </header>
      </div>
      );
  }
}

export default Header;