import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <>
      <div className="footer">
          <a className='icons' href="https://www.instagram.com/vivalindaoficial">
            <img  alt="Instagram" src={ require("../static/insta.svg") } />
          </a>
          <a className='icons' href="https://www.facebook.com/vivalindaoficial">
            <img alt="Facebook" src={require("../static/face.svg")} />
          </a>
          <a className='icons' href="mailto:contato@vivalinda.com.br">
            <img alt="Email" src={ require("../static/mail.svg" ) } />
          </a>
      </div>
        <div className="footerNote">
          <p>©2019 - VIVALINDA- Todos os Direitos Reservados</p>
        </div>
      </>
  )
}

export default Footer