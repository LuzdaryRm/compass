import React from 'react'
import { Title } from '../HeadingTitle'
import Button from '../Button'
import { CardInfoStyle } from './styles'

const CardInfo = () => (
  <CardInfoStyle>
    <Title fontSize={[2, 4]} lineHeight="1.5" mb={4}>NAVIGATE YOUR REAL ESTATE JOURNEY WITH A TRUSTED PARTNER</Title>

    <p>Connan transitioned to the real estate industry following a distinguished career in the economics and stock market realm. His previous roles required perseverance, tenacity, highly developed communication and negotiation skills, often working with diverse multi-national organizations. Today, as a real estate professional, he applies these talents for a broad spectrum of discerning clients.</p>

    <Button primary fontSize="10px" mt={4}>LEARN MORE</Button>
  </CardInfoStyle>
)

export default CardInfo
