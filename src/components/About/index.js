import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <section className='aboutme'>
        <h1 id='about'>About Me</h1>
        <img
          src={require('../../assets/images/Jaime_and_I.jpg')}
          alt='My Fiance and I'
          className='Photo' />
        <p>This is going to be my description</p>
      </section>
    )
  }
}

export default About