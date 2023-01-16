import React, { useEffect } from 'react'
import { useState } from 'react'
import './header.scss'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
import AnimatedLetters from './animatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faCss3, faJsSquare, faReact, faNodeJs, faJava} from '@fortawesome/free-brands-svg-icons'
const Header = () => {

  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = " Michelle".split('')
  const jobArray = "Fullstack Developer".split('')


  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 5000)
  }, [])

  return (
    <section id='header'>
      <header>
        <div className="container header__container">
          <div className="text-zone">
            <h1>Hello! <br />
              <span className={letterClass}>I</span>  
              <span className={`${letterClass} _14`}>'m</span> 
              <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15} />
              <br />            
              <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={24} />
            </h1>
            <CTA />
          </div>
          <div className="stage-cube-cont">
            <div className="cubespinner">
              <div className="face1">
                <FontAwesomeIcon icon={faHtml5} color="#F06529" />
              </div>
              <div className="face2">
                <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
              </div>
              <div className="face3">
                <FontAwesomeIcon icon={faReact} color="#5ED4FA" />
              </div>
              <div className="face4">
                <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
              </div>
              <div className="face5">
                <FontAwesomeIcon icon={faNodeJs} color="#68A063" />
              </div>
              <div className="face6">
                <FontAwesomeIcon icon={faJava} color="#DD0031" />
              </div>
            </div>
          </div>
          <HeaderSocials />


          <a href='#contact' className='scroll__down'>Scroll Down</a>
        </div>
      </header>
    </section>
  )
}

export default Header