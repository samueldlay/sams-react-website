import React from 'react'

export default function About () {
    return (
        <main id="about">
    <h1 className="large-heading">
      About <span className="text-secondary">Me</span>
    </h1>
    <h2 className="small-heading">
      A few details about me...
    </h2>
    <div className="about-info">
       {/* <img src="img/prof-pic2.jpg" alt="me" className="about-image"> */}
        <div className="bio">
            <h3 className="text-secondary">My Story</h3>
            <p>On June 2, 1989, my mother gave birth to me without my permission.</p>
        </div>

      <div className="job job1">
          <h3>Job 1</h3>
          <h6>Position</h6>
          <p>Coming soonish...</p>
      </div>
      <div className="job job2">
        <h3>Job 2</h3>
        <h6>Position2</h6>
        <p>Coming soonish...</p>
    </div> 
    <div className="job job3">
        <h3>Job 3</h3>
        <h6>Position 3</h6>
        <p>Coming soonish...</p>
    </div>   
    </div>
  </main>
    )
}