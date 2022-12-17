import React, { Component } from 'react'
import { Route, Routes, NavLink, HashRouter } from 'react-router-dom'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Clock from 'react-live-clock'
// import DatePicker from 'react-date-picker'


class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <div className='name_clock'>
            <h1>Mike Pergolatti</h1>
            <Clock format={'h:mm:ss a'} ticking={true} timezone={'US/Eastern'} className='clock' />
          </div>
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
        <footer>
          <div className='footer_pin'>
            <ul className='footer'>
              <li>GitHub</li>
              <li>Facebook</li>
              <li>Linked In</li>
              {/* <DatePicker /> */}
            </ul>
          </div>
        </footer>
      </HashRouter>
      
    )
  }
}

export default App;
