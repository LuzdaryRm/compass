import React from 'react'
import {
  Container, Grid, Row, Col4,
} from '../../components/Grid'
import { Box, BoxHover } from './styles'
import iconCircle from '../../assets/images/icon-circle.png'

const images = [
  {
    id: 1, title: 'CORAL RIDGE',
  },
  {
    id: 2, title: 'CORAL RIDGE COUNTRY CLUB',
  },
  {
    id: 3, title: 'COLEE HAMMOCK',
  },
  {
    id: 4, title: 'VICTORIA PARK',
  },
  {
    id: 5, title: 'SUNRISE INTRACOASTAL',
  },
  {
    id: 6, title: 'BAY COLONY',
  },
  {
    id: 7, title: 'BAY COLONY',
  },
  {
    id: 8, title: 'BAY COLONY',
  },
  {
    id: 9, title: 'BAY COLONY',
  },
]

const CityList = () => (
  <div>
    <Container mt={4}>
      <Grid>
        <Row>
          {images.map((item) => (
            <Col4 key={item.id} size={2} space="2px" sm="50%" xs="100%">
              <Box image={item.url}>
                <span>{item.title}</span>
                <BoxHover className="boxHover">
                  <span>
                    <span className="iconBox">
                      <img src={iconCircle} alt="icon" />
                    </span>
                    <span className="boxTextMiddle">VIEW ALL PROPERTIES</span>
                    <p className="boxTextBottom">Let’s Find Your Home</p>
                  </span>
                </BoxHover>
              </Box>
            </Col4>
          ))}
        </Row>
      </Grid>
    </Container>
  </div>
)

export default CityList
