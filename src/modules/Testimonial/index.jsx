import React from 'react'
import {
  Container, Grid, Row, Col4, ContentBox,
} from '../../components/Grid'
import { TitleItalic, Title } from '../../components/HeadingTitle'
import { TextWrap } from './styles'


const Testimonial = () => (
  <div>
    <Container>
      <ContentBox>
        <TitleItalic fontSize={2} pt={[5, 6]} textAlign="center">Explore Washington, DC.</TitleItalic>
        <Title fontSize={[2, 3]} textAlign="center" mb={[4, 5]}>TESTIMONIALS</Title>

        <Grid pb={[5, 6]}>
          <Row>
            <Col4 space="5px" size={1} sm="50%" spaceSm="10px" xs="100%">
              <TextWrap>“I just wanted to share a quick note and let you know that you guys do a really good job. I’m glad I decided to work with you. It’s really great how easy your websites are to update and manage. I never have any problem at all.</TextWrap>
            </Col4>
            <Col4 space="0 30px" size={1} sm="50%" spaceSm="10px" xs="100%" spaceXs="20px 0">
              <TextWrap>“I just wanted to share a quick note and let you know that you guys do a really good job. I’m glad I decided to work with you. It’s really great how easy your websites are to update and manage. I never have any problem at all.</TextWrap>
            </Col4>
            <Col4 space="5px" size={1} sm="50%" spaceSm="10px" xs="100%">
              <TextWrap>“I just wanted to share a quick note and let you know that you guys do a really good job. I’m glad I decided to work with you. It’s really great how easy your websites are to update and manage. I never have any problem at all.</TextWrap>
            </Col4>
          </Row>
        </Grid>
      </ContentBox>
    </Container>
  </div>
)

export default Testimonial
