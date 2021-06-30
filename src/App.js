import React from 'react';
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';
import './App.css';
import Data from './Components/Data.json';

class App extends React.Component {

  // dispalyFilterdImages = (dataArray) => {
  //   this.setState({dataArray})
  // }

  render() {
    return (
      <div>
        <Header/>
        <Main/>
        <Footer/>
      </div>
    )
  }
}

export default App; 