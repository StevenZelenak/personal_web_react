import React from 'react';
import { Container } from 'react-bootstrap';
import NavbarComp from '../Components/Navbar/navbarComponent';
import CanvaComp from '../Components/Canvas/Jumbo/CanvaComponent';
import BioComp from '../Components/Bio/BioComponent';
import SkillsIKnowComponent from '../Components/SkillsIKnow/SkillsIKnowComponent';
import SkillsIAmLearning from '../Components/SkillsIAmLearning/SkillsIAmLearningComponent';
import './App.scss';
// import fbConnection from '../helpers/data/connection';

// Keeping this here for the potential of having user's login into the site with firebase
// fbConnection();

class App extends React.Component {
  render() {
    return (
      <Container fluid className="App">
        <NavbarComp />
        <CanvaComp />
        <BioComp />
        <SkillsIKnowComponent />
        <SkillsIAmLearning />
      </Container>
    );
  }
}

export default App;
