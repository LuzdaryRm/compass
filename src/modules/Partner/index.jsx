import React from 'react'
import styled from 'styled-components'
import { space } from 'styled-system'
import {
  Container, Grid, Row, Col,
} from '../../components/Grid'
import CardInfo from '../../components/Card'
import { CardImage } from '../../components/Card/styles'


import imageCard from '../../assets/images/card-image.jpg'

const PartnerContent = styled.div(space)

const Partner = () => (
  <PartnerContent mt={5}>
    <Container>
      <Grid>
        <Row>
          <Col md="50%" sm="100%">
            <CardInfo />
          </Col>
          <Col md="50%" sm="100%" collapse="xs">
            <CardImage image={imageCard} />
          </Col>
        </Row>
      </Grid>
    </Container>
  </PartnerContent>
)

export default Partner
