import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <section className='aboutme'>
        <h1 id='about'>A Day in the Life</h1>
        <img
          src={require('../../assets/images/Jaime_and_I.jpg')}
          alt='My Fiance and I'
          className='photo' />
        <p className='bio_text'>My name is Mike Pergolatti, Im an aspiring full stack software developer. Ive been heavily studying full stack web development for 5 1/2 months with no plans to stop anytime soon. I would love to make this my career. 
        <br />
        <br />
        My fiance ( Jaime ) and I love to travel. We plan to buy a house in Tennessee with 30+ acres and live our dream. We also want to buy a large RV and travel the country side. We don't have any kids but we have two fur babies. A mini-pomeranian named Paisley and a golden retriever named Stella</p>
      </section>
    )
  }
}

export default About