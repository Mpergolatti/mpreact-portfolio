// import React, { useState } from "react";

// const Projects = ({}) => {
//   const [currentProject, setCurrentProject] = useState()

//   const [project] = useState([
//     {
//       id: 0,
//       title: 'title',
//       languages: 'languages',
//       packages: 'packages',
//       images: 'image location',
//       description: 'description',
//       repo: 'repo',
//       live: 'live'
//     },
//     {
//       id: 1,
//       title: 'title',
//       languages: 'languages',
//       packages: 'packages',
//       images: 'image location',
//       description: 'description',
//       repo: 'repo',
//       live: 'live'
//     },
//     {
//       id: 2,
//       title: 'title',
//       languages: 'languages',
//       packages: 'packages',
//       images: 'image location',
//       description: 'description',
//       repo: 'repo',
//       live: 'live'
//     },
//     {
//       id: 3,
//       title: 'title',
//       languages: 'languages',
//       packages: 'packages',
//       images: 'image location',
//       description: 'description',
//       repo: 'repo',
//       live: 'live'
//     },
//     {
//       id: 4,
//       title: 'title',
//       languages: 'languages',
//       packages: 'packages',
//       images: 'image location',
//       description: 'description',
//       repo: 'repo',
//       live: 'live'
//     },
//     {
//       id: 5,
//       title: 'title',
//       languages: 'languages',
//       packages: 'packages',
//       images: 'image location',
//       description: 'description',
//       repo: 'repo',
//       live: 'live'
//     },
//     {
//       id: 6,
//       title: 'title',
//       languages: 'languages',
//       packages: 'packages',
//       images: 'image location',
//       description: 'description',
//       repo: 'repo',
//       live: 'live'
//     },
//   ])

//     return(
//       <section>

//       </section>
//     )
  
// }

// export default Projects

import React from 'react';
import ProjectData from '../ProjectData';

const project = [
  {
    id: 0,
    title: 'Taskinator',
    languages: 'JavaScript, HTML, CSS',
    packages: 'N/A',
    images: require('../../assets/images/taskinator.jpg'),
    description: 'Track your tasks with our easy to use application. You can add a task and have it in a TO DO section, In Progress section and a Completed section. Keeping track of your every day tasks has never been easier! ',
    repo: 'https://github.com/Mpergolatti/taskinatorOne',
    live: 'https://mpergolatti.github.io/taskinatorOne/'
  },
  {
    id: 1,
    title: 'Code Quiz',
    languages: 'HTML, CSS, JavaScript, Web APIs',
    packages: 'N/A',
    images: require('../../assets/images/code_quiz.jpg'),
    description: 'Come play our code quiz where you can try your luck at our 8 question JavaScript, HTML and CSS test! Keep Score and save your high score to the leaderboard!',
    repo: 'https://github.com/Mpergolatti/code-quiz',
    live: 'https://mpergolatti.github.io/code-quiz/'
  },
  {
    id: 2,
    title: 'Password Generator',
    languages: 'HTML, CSS and JavaScript',
    packages: 'N/A',
    images: require('../../assets/images/password_gen.jpg'),
    description: 'Create a randomly generated password that can have uppercase letters, lowercase letters, numbers and symbols! You choose how long you want your password and what should be included in creating it',
    repo: 'https://github.com/Mpergolatti/PasswordGen',
    live: 'https://mpergolatti.github.io/PasswordGen/'
  },
  {
    id: 3,
    title: 'Oh Snap!',
    languages: 'React, CSS, JavaScript',
    packages: 'N/A',
    images: require('../../assets/images/oh_snap.jpg'),
    description: 'A photography page created for a client that shows off her photos.',
    repo: 'https://github.com/Mpergolatti/photo-port',
    live: 'https://mpergolatti.github.io/photo-port/'
  },
  {
    id: 4,
    title: 'Run Buddy',
    languages: 'HTML and CSS',
    packages: 'packages',
    images: require('../../assets/images/run_buddy.jpg'),
    description: 'A simple web page for a client that connects people with trainers.',
    repo: 'https://github.com/Mpergolatti/run-buddy',
    live: 'https://mpergolatti.github.io/run-buddy/'
  },
  {
    id: 5,
    title: 'FoodyTrack',
    languages: 'HTML, CSS, JavaScript, Web APIs',
    packages: 'Edemam API, OpenEmoji API, Materialize',
    images: require('../../assets/images/foody_track.jpg'),
    description: 'This is a collaboration project we created to get recipes offline and put them on one page on cards to see, share and save.',
    repo: 'https://github.com/annoyingdroid/FoodyTrack',
    live: 'https://annoyingdroid.github.io/FoodyTrack/'
  },
]

function Projects() {
  return(
    <div>
      <ProjectData project={project} />
    </div>
  )
}

export default Projects