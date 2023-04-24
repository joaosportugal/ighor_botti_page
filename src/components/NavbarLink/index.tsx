import React from 'react'
import styled from 'styled-components'

type NavbarLinkProps = {
  active?: boolean
}

export const NavbarLink = styled.a<NavbarLinkProps>`
  color: ${(props) => (props.active ? '#fcb900' : '#16202f')};
  border-bottom: ${(props) => (props.active ? '2px solid #fcb900' : 'none')};
  text-decoration: none;
  letter-spacing: 2px;
  background-color: transparent;
  font-size: 18px;
  font-weight: bold;
  text-decoration: none;

  :hover {
    color: #fcb900;
  }
`
