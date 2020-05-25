import React from 'react'
import styled from 'styled-components'
import { typography } from 'styled-system'
import BannerStyle from './styles'
import bgHome from '../../assets/images/home-bg.jpg'
import { Container } from '../Grid'
import Button from '../Button'
import buttonDown from '../../assets/images/down.png'
import { TitleItalic, Title } from '../HeadingTitle'

const Subtitle = styled.span(typography)

const Banner = () => (
  <Container>
    <BannerStyle url={bgHome} pb={6}>
      <div className="bannerInner">
        <Subtitle fontSize={1}>WELCOME TO</Subtitle>
        <Title pb={2} pt={2} fontSize={["32px", "40px"]}>CONNAN HALSSEN</Title>
        <TitleItalic className="titleItalic" mb={4} fontSize={2}>Let’s guide you through the  Washinbton DC Real Estate neighborhoods.</TitleItalic>
        <Button fontSize="10px" primary>VIEW ALL HOMES</Button>
        <div className="arrowDown">
          <img src={buttonDown} alt="button down" />
        </div>
      </div>
    </BannerStyle>
  </Container>
)

export default Banner
