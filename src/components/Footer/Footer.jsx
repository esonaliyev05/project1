import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { SiMeta } from "react-icons/si";
import "./Footer.scss"

const Footer = () => {
  return (
    <footer>

      <div className="bg-left">
        <img src="public/bg-header-left.png" alt="" />
      </div>

    <div className='container_footer'>

      <div className="footer_parent">
        <div className="text">
          <h1>Contact</h1>
          <p>I would love to hear about your project and how I <br/> could help. Please fill in the form, and I’ll get back <br/> to you as soon as possible.</p>
        </div>

        <form action="">
          <input type="text" placeholder='NAME' />
          <input type="text" placeholder='EMAIL'/>
          <textarea placeholder='MESSAGE'></textarea>
            <div className='btn-form'>

          <button type='subit' >SEND MESSAGE</button>
            </div>
        </form>

      </div>
        
      <div className='footer_end'>

<h1>adamkeyes</h1>

<div className='nav_link'>
    <a href=""> <FaGithub/> </a>
    <a href=""> <SiMeta/></a>
    <a href=""> <FaLinkedin/></a>
    <a href=""><FaTwitter/> </a>
</div>

</div>
    </div>
    
    </footer>
  )
}

export default Footer