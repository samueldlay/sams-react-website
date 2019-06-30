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
            <p>My initial exposure to programming began when I was still pursuing a degree in electrical engineering, taking a course in C, and another course that utilized MATLAB. I have been programming with JavaScript as my primary language for a little over a year, mainly creating projects intended to improve my understanding of the language and its rapidly evolving built-in library. I have numerous projects that are still in development/polishing phase, but my portfolio is available upon request. Below is a list of the most valuable skills that I’ve learned that reflect the current trend of modern web-development/programming paradigms.
</p>
        </div>

    </div>
  </main>
    )
}