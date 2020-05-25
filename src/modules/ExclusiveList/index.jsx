import React from 'react'
import styled from 'styled-components'
import { typography } from 'styled-system'
import { Container } from '../../components/Grid'
import { TitleItalic, Title } from '../../components/HeadingTitle'
import Carousel from '../../components/Carousel'
import Button from '../../components/Button'

const Center = styled.div(typography)

const images = [
  {
    id: 1, title: 'FPO', price: '$1,745,000', detail: '2 Beds • 2 Bath •  1,084 Sq.Ft', address: '209 N Birch Rd #701, Fort Lauderdale, FL 33304',
  },
  {
    id: 2, title: 'FPO', price: '$1,745,000', detail: '2 Beds • 2 Bath •  1,084 Sq.Ft', address: '209 N Birch Rd #701, Fort Lauderdale, FL 33304',
  },
  {
    id: 3, title: 'FPO', price: '$1,745,000', detail: '2 Beds • 2 Bath •  1,084 Sq.Ft', address: '209 N Birch Rd #701, Fort Lauderdale, FL 33304',
  },
  {
    id: 4, title: 'FPO', price: '$1,745,000', detail: '2 Beds • 2 Bath •  1,084 Sq.Ft', address: '209 N Birch Rd #701, Fort Lauderdale, FL 33304',
  },
  {
    id: 5, title: 'FPO', price: '$1,745,000', detail: '2 Beds • 2 Bath •  1,084 Sq.Ft', address: '209 N Birch Rd #701, Fort Lauderdale, FL 33304',
  },
]

const ExclusiveList = () => (
  <div>
    <Container>
      <TitleItalic fontSize={2} pt={5} textAlign="center">Explore Washington, DC.</TitleItalic>
      <Title fontSize={[2, 3]} textAlign="center" mb={4}>EXCLUSIVE LISTINGS</Title>
      <Carousel data={images} />
      <Center textAlign="center">
        <Button fontSize="10px" mt={4} secondary>VIEW ALL HOMES</Button>
      </Center>
    </Container>
  </div>
)

export default ExclusiveList
