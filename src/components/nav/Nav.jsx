import React from 'react'
import './nav.css'
import {ImHome} from 'react-icons/im'
import {FaUserAstronaut} from 'react-icons/fa'
import {BsBookHalf} from 'react-icons/bs'
import {BsBriefcaseFill} from 'react-icons/bs'
import {MdContactMail} from 'react-icons/md'
import { useState } from 'react'

const Nav = () => {
  const [activeIcon, setActiveIcon] = useState('#')
  return (
    <nav>
        <a href='#header' onClick={() => setActiveIcon('#')} className={activeIcon === '#' ? 'active' : ''}><ImHome/></a>
        <a href='#about' onClick={() => setActiveIcon('#about')} className={activeIcon === '#about' ? 'active' : ''} ><FaUserAstronaut/></a>
        <a href='#experience' onClick={() => setActiveIcon('#experience')} className={activeIcon === '#experience' ? 'active' : ''}><BsBookHalf/></a>
        <a href='#portfolio' onClick={() => setActiveIcon('#portfolio')} className={activeIcon === '#portfolio' ? 'active' : ''}><BsBriefcaseFill/></a>
        <a href='#contact' onClick={() => setActiveIcon('#contact')} className={activeIcon === '#contact' ? 'active' : ''}><MdContactMail/></a>
    </nav>
  )
}

export default Nav