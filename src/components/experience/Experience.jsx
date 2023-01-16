import React from 'react'
import './experience.css'
import {AiFillCheckCircle} from 'react-icons/ai'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>My Skills</h5>
      <h2>My Experience</h2>

      <div className='container experience__container'>
        <div className='experience__frontend'>
          <h3>Frontend Development</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <AiFillCheckCircle className='experience__detail-icon' />
              <div>
                <h4>HTML</h4> 
                <small className='text-light'>Proficient</small>
              </div>      
            </article>
            <article className='experience__details'>
              <AiFillCheckCircle className='experience__detail-icon' />
              <div>
                <h4>CSS</h4> 
                <small className='text-light'>Proficient</small>
              </div>
            </article>
            <article className='experience__details'>
              <AiFillCheckCircle className='experience__detail-icon' />
              <div>
                <h4>JavaScript</h4> 
                <small className='text-light'>Proficient</small>
              </div>
            </article>
            <article className='experience__details'>
              <AiFillCheckCircle className='experience__detail-icon' />
              <div>
                <h4>React</h4> 
                <small className='text-light'>Familiar</small>
              </div>      
            </article>
            <article className='experience__details'>
              <AiFillCheckCircle className='experience__detail-icon' />
              <div>
                <h4>Redux</h4> 
                <small className='text-light'>Beginner</small>
              </div>
            </article>
          </div>
        </div>
        <div className='experience__backend'>
        <h3>Backend Development</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <AiFillCheckCircle className='experience__detail-icon' />
              <div>
                <h4>Java</h4> 
                <small className='text-light'>Proficient</small>
              </div>
            </article>
            <article className='experience__details'>
              <AiFillCheckCircle className='experience__detail-icon'   />
              <div>
                <h4>NodeJS</h4> 
                <small className='text-light'>Familier</small>
              </div>
            </article>
            <article className='experience__details'>
              <AiFillCheckCircle className='experience__detail-icon' />
              <div>
                <h4>MySQL</h4> 
                <small className='text-light'>Familier</small> 
              </div>
            </article>
            <article className='experience__details'>
              <AiFillCheckCircle className='experience__detail-icon' />
              <div>
                <h4>MongoDB</h4> 
                <small className='text-light'>Familier</small>
              </div>
            </article>
          </div>
            
        </div>
      </div>

    </section>
  )
}

export default Experience