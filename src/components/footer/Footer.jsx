import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {VscGithub} from 'react-icons/vsc'

const Footer = () => {
  return (
    <footer>
    
      <ul className='permalinks'>
        <li><a href="#header">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Expierience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/michelle-doren-1301b4164/" target='_blank' rel="noreferrer"><BsLinkedin /></a>
        <a href="https://github.com/aya1999" target='_blank' rel="noreferrer"><VscGithub /></a>
      </div>

      <div className="footer__copyright">
        <small>
          &copy; MAD All rights Reserved
        </small>
      </div>
    </footer>
  )
}

export default Footer