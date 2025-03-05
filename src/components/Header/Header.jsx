import React from 'react'
import "./Header.scss"
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { SiMeta } from "react-icons/si";
const Header = () => {
  return (
    <header>

    <div className='container'>
       <nav className='nav_container'>

        <a href="#">

        <h1>adamkeyes</h1>
        </a>

        <div className="nav_link">
  <a href="https://github.com/YOUR_USERNAME" target="_blank" rel="noopener noreferrer">
    <FaGithub />
  </a>
  <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
    <SiMeta />
  </a>
  <a href="https://www.linkedin.com/in/YOUR_USERNAME" target="_blank" rel="noopener noreferrer">
    <FaLinkedin />
  </a>
  <a href="https://twitter.com/YOUR_USERNAME" target="_blank" rel="noopener noreferrer">
    <FaTwitter />
  </a>
</div>


       </nav>

       <div className='bg-header'>
        <img src="bg-header-left.png" alt="" />
       </div>
        
        <div className="haeder-container">
          <div className="header-text">
            <h1>Nice to meet you! <br /> I’m <span>Adam Keyes.</span></h1>
            <p>Based in the UK, I’m a front-end developer <br /> passionate about building accessible web apps <br /> that users love.</p>
            <a href="#concat">
            <button>CONTACT ME</button>
            </a>
          </div>

           <div className="header-public">
            <img src="image-removebg-preview(4).png" alt="" />
           </div>

        </div>


    </div>

     <div className="header_tols">

      <div className="bg-right">
        <img src="bg-header-left.png" alt="" />
      </div>
      
      <div className="boxses">
        <div className="box"><h1>HTML</h1><br /><p>4 Years Experience</p></div>
        <div className="box"><h1>CSS</h1><br /><p>4 Years Experience</p></div>
        <div className="box"><h1>Javascript</h1><br/><p>4 Years Experience</p></div>
        <div className="box"><h1>Accessibility</h1><br /><p> 4 Years Experience</p></div>
        <div className="box"><h1>React</h1><br /><p>3 Years Experience</p></div>
        <div className="box"><h1>Sass</h1><br /> <p>3 Years Experience</p></div>
      </div>

     </div>

    </header>
  )
}

export default Header