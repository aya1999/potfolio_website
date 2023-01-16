import React from 'react'
import {RiLinkedinBoxLine} from 'react-icons/ri'
import {VscGithub} from 'react-icons/vsc'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/michelle-doren-1301b4164/' target='_blank' rel="noreferrer"><RiLinkedinBoxLine/></a>
        <a href='https://github.com/aya1999' target='_blank' rel="noreferrer"><VscGithub/></a>
    </div>
  )
}

export default HeaderSocials