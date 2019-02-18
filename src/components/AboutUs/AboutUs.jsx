import React, { Component } from 'react'
import { Link } from 'gatsby'
import './AboutUs.css'

const AboutUs = () => {
  return (
    <section className="section-about">
      <div className="about-uss">
        <h2 style={{ textAlign: 'center' }}>ABOUT US</h2>
        <div className="about-hr">
          <hr />
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ex
          ligula, mollis nec molestie id, bibendum vel dui. Duis scelerisque,
          est vitae facilisis eleifend, eros dolor dignissim lectus, sed
          suscipit sapien arcu ut erat. Ut non mollis lacus, vulputate convallis
          lacus. Donec imperdiet tempus sapien, non condimentum quam.
          Suspendisse potenti. Integer ut dignissim metus. Curabitur dui nibh,
          cursus non augue sit amet, faucibus efficitur tortor. Fusce a felis ac
          lacus fermentum porttitor sed id dolor. Donec facilisis tristique
          urna, a sodales lorem vehicula in. Duis scelerisque bibendum
          dignissim.
        </p>
        <div className="div-about">
          <a className="about-button" href="/about">
            READ MORE
          </a>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
