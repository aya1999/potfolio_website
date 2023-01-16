import React from 'react'
import './about.css'
import ME from '../../assets/images/MDlogo.png'

const About = () => {
  return (
    <section id='about'>
      <h5>Who am I?</h5>
      <h2>Get To Know A Little About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className="about__me-image">
            <img src={ME} alt="letter M" />
          </div>
        </div>

        <div>
          <p> &emsp; Hello there! My name is Michelle Doren and I am a full-stack developer currently based in Allentown, Pennsylvania. I have a Bachelors of Software Development from 
            Western Governors University. My first introduction to programming was in High School where it quickly became my favorite subject. 
            I find myself drawn to coding because I enjoy using logic to solve problems. I'm always open to learning new technologies and getting to know
            how code really works "under the hood". I would love to use my skills to work on projects that leave a 
            positive and meaningful impact on this world.</p>
          <p> &emsp; In my personal time, I enjoy baking, drawing, studying Japanese and listening to music. I am an avid animal lover and have spent the past three years raisng
            puppies for The Seeing Eye and being a puppy educator for my local Seeing Eye club. In the future, I hope to be able to travel to many different countries and exlpore 
            different cultures. 
          </p>
        </div>
        
        <a href="#contact" className='btn  btn-primary'>Let's Talk</a>
      </div>
    
    </section>
  )
}

export default About