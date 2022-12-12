import React, { Component } from 'react'
import { Route, Routes, NavLink, HashRouter } from 'react-router-dom'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'


class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1>Mike Pergolatti</h1>
          <ul className='header'>
            <li><NavLink to='/'>About Me</NavLink></li>
            <li><NavLink to='/Projects'>My Projects</NavLink></li>
            <li><NavLink to='/Contact'>Contact Me</NavLink></li>

          </ul>
          <div className='content'>

          <Routes>
            <Route exact path='/' element={<About />} />
            <Route path='/Projects' element={<Projects />} />
            <Route path='/Contact' element={<Contact />} />
          </Routes>

          </div>
        </div>
      </HashRouter>
      
    )
  }
}

export default App;
