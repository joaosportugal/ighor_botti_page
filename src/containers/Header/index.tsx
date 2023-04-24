import React from 'react'
import { MainHeader } from './styles'
import { NavbarLink } from '../../components/NavbarLink'

function Header() {
  return (
    <MainHeader>
      <img
        src="https://static.vecteezy.com/ti/vetor-gratis/p3/585529-modelos-de-de-logotipo-do-sol-gratis-vetor.jpg"
        alt="Logo"
        className="header__logo"
      />
      <nav className="navbar">
        <NavbarLink href="#" active>
          Home
        </NavbarLink>
        <NavbarLink href="#">Sobre</NavbarLink>
        <NavbarLink href="#">Serviços</NavbarLink>
        <NavbarLink href="#">Contato</NavbarLink>
      </nav>
      <ul className="socialMedias">
        <li>
          <a href="#" className="socialMedias__item">
            <img
              src="https://img.icons8.com/fluency/48/null/instagram-new.png"
              alt="instagram"
            />
          </a>
        </li>
        <li>
          <a href="#">
            <img
              src="https://img.icons8.com/color/48/null/facebook.png"
              alt="facebook"
            />
          </a>
        </li>
        <li>
          <a href="#">
            <img src="https://img.icons8.com/color/48/null/whatsapp--v1.png" />
          </a>
        </li>
      </ul>
    </MainHeader>
  )
}

export default Header
