import React from 'react'

export default function Home (props) {
    return (
        <main id="home">
    <h1 className="large-heading">
      Samuel <span className="text-secondary">Lay</span>
    </h1>
    <h2 className="small-heading">
      Web Developer, Programmer, Writer, & Musician
    </h2>
    <div className="icons">

      <a href="https://github.com/samueldlay?tab=repositories">
        <i className="fab fa-github fa-10x"></i>
      </a>
      {/* <a href="#!">
        <i className="fab fa-linkedin fa-2x"></i>
      </a>
      <a href="#!">
        <i className="fas fa-envelope fa-2x"></i>
      </a> */}
    </div>
  </main>
    )
}