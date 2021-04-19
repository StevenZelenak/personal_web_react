import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavbarComp from '../Components/Navbar/navbarComponent';
import './App.scss';
// import fbConnection from '../helpers/data/connection';

// Keeping this here for the potential of having user's login into the site with firebase
// fbConnection();

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <NavbarComp />
        </Router>
        <h1>This is the App</h1>
      </div>
    );
  }
}

export default App;
