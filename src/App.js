import React, { Component } from 'react'
import { Route, Routes, NavLink, HashRouter } from 'react-router-dom'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Resume from './components/Resume'
import Clock from 'react-live-clock'
import { SocialIcon } from 'react-social-icons'
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
            <li><NavLink to='/Resume'>Resume</NavLink></li>

          </ul>
          <div className='content'>

          <Routes>
            <Route exact path='/' element={<About />} />
            <Route path='/Projects' element={<Projects />} />
            <Route path='/Contact' element={<Contact />} />
            <Route path='/Resume' element={<Resume />} />
          </Routes>

          </div>
        </div>
        <footer>
          <div className='footer_pin'>
            <ul className='footer'>
              <SocialIcon className='github' url="https://github.com/Mpergolatti" />
              <SocialIcon className='facebook' url="https://facebook.com/Mpergolatti" />
              <SocialIcon className='linkedin' url="https://www.linkedin.com/in/michael-pergolatti/" />

              {/* <DatePicker /> */}
            </ul>
          </div>
        </footer>
      </HashRouter>
      
    )
  }
}

export default App;
