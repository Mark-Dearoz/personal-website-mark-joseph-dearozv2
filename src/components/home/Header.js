import React from 'react'
import github from '../../img/github.svg'
import linkedin from '../../img/linkedIn.svg'
import instagram from '../../img/instagram.svg'
import logo from '../../img/logo.svg'

const Header = () =>{
    return(
        <div className="header">
            <img src={logo}></img>
            <div className="links">
                
                <a href="https://instagram.com">
                    <img src={instagram}></img>
                </a>
                <a href="https://www.linkedin.com/in/mark-joseph-dearoz-3a75471b6/">
                    <img src={linkedin}></img>
                </a>
                <a href="https://github.com/Mark-Dearoz">
                    <img src={github}></img>
                </a>
            </div>
        </div>
    )
}

export default Header