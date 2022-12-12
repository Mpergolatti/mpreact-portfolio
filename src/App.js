import React, { Component } from 'react'
// import { Route, Routes, NavLink, HashRouter } from 'react-router-dom'
// import About from './components/About'


class App extends Component {
  render() {
    return (

        <div>
          <h1>Mike Pergolatti</h1>
          <ul className='header'>
            <li><a href='./components/About'>About Me</a></li>
            <li><a href='./components/Projects'>Projects</a></li>
            <li><a href='./components/Contact'>Contact Me</a></li>
          </ul>
          <div className='content'>

          </div>
        </div>
      
    )
  }
}

export default App;
