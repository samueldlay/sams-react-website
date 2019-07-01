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
            {/* <p>It all began as I was finishing my English degree in my early 20's, and I'd developed a fascination with the sciences -- namely physics. It wasn't long before I had decided that I wanted to pursue a degree in electrical engineering. My initial exposure to programming began when I took a course called 'C For Engineers'. Tuition for classes was proving too challenging to afford, so I made an executive decision to drop out after passing Calculus 3. But I still carried with me a passion for programming and a burning desire to continue learning.</p>  */}
            <p>I have been programming with JavaScript as my primary language for a little over a year, mainly working on projects intended to encourage growth in my understanding of this versatile language. Every new line of code is another opportunity to create and to learn. Join me as I set sail on this coding adventure!</p>
        </div>

    </div>
  </main>
    )
}