import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/images/Appointment.JPG'
import IMG2 from '../../assets/images/shoppingcart.JPG'
import IMG3 from '../../assets/images/TermApp.JPG'


const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Appointment Booking Application',
    description:'A stand alone Java application using MySQL database. Can add, update, and delete customers and appointments.',
    github: 'https://github.com/aya1999/Scheduling-App'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Fullstack Shopping Cart',
    description: 'A fullstack shopping cart web application using the MERN stack with Redux.',
    github: 'https://github.com/aya1999/MERN-Shopping-Cart'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Course Management Mobile App',
    description: 'An android app written in Java and utilizes Room Database. Manages terms, courses, and assesments.',
    github: 'https://github.com/aya1999/DorenTermApp'
  }, 

]
const portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Check out some of my work!</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({ id, image, title, description, github, demo }) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className='portfolio__item-image'>
                  <img src={image} alt="{title}" />
                </div>
                <h3>{title}</h3>
                <p>{description}</p>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='_blank' rel='noreferrer'>Github</a>
                </div>
              </article>

            )
          })
        }
      </div>

    </section>
  )
}

export default portfolio