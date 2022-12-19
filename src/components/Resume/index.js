import React, { Component } from "react";

class Resume extends Component {
  render() {


    return(
      <div>
        <div className="download_link">
        <a href={require('../../assets/downloads/mp_resume.pdf')} download>Click For Resume</a>
        </div>
        <div className="front_end">
          <ul>
            <p>Front End Proficiencies</p>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>API's</li>
            <li>React</li>
            <li>Git</li>
            <li>GitHub Repo Management</li>
          </ul>
          <ul>
            <p>Back End Proficiencies</p>
            <li>Node</li>
            <li>Express</li>
            <li>Model View Controller (MVC)</li>
            <li>Progressive Web Applications (PWA)</li>
            <li>Object Oriented Programming (OOP)</li>
            <li>CRUD</li>
          </ul>
          <ul>
            <p>Database Proficiencies</p>
            <li>MySQL</li>
            <li>Sequelize</li>
            <li>NoSQL</li>
            <li>GraphQL</li>
            <li>MongoDB</li>
            <li>Mongoose</li>
          </ul>
        </div>
      </div> 
    )
  }
}

export default Resume;