import React, { useState } from 'react'
import LogoMain from '../../assets/images/logo-main.png'
import Logo from '../../assets/images/logo.png'
import Button from '../Button'
import {
  Nav, Brands, LinkMenu, ButtonToogle, ListLinkMenu, ButtonClose,
} from './styles'
import { Container, Flex } from '../Grid'
import SocialMedia from '../SocialMedia'

const Header = () => {
  const [isActive, setActive] = useState(false)

  const handleClick = () => {
    setActive(!isActive)
  }

  return (
    <div>
      <Container>
        <Nav>
          <Brands>
            <Flex align="center">
              <a className="logoLeft">
                <img src={LogoMain} alt="Logo" />
              </a>
              <a className="logoRight">
                <img src={Logo} alt="Logo" />
              </a>
            </Flex>
          </Brands>
          <ListLinkMenu>
            <SocialMedia />
            <Flex align="center" className="listLinkMenuContent">
              <LinkMenu p={0} className={`linkMenu ${isActive ? 'active' : ''}`}>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Exclusive Listings</a>
                </li>
                <li>
                  <a href="#">Search Properties</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <Button>Connect</Button>
                </li>
                <ButtonClose onClick={handleClick}>
                  <span />
                </ButtonClose>
              </LinkMenu>
              <ButtonToogle onClick={handleClick} />
            </Flex>
          </ListLinkMenu>
        </Nav>
      </Container>
    </div>
  )
}

export default Header
