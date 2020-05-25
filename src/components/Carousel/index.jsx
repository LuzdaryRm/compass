import React from 'react'
import Slider from 'react-slick'
import PropTypes from 'prop-types'
import { Item, Price, Text } from '../Item';
import { TitleSecondary } from '../HeadingTitle'
import bgItem from '../../assets/images/img1.jpg'
import { ListDots, Like } from './styles'
import IconSvg from '../IconSvg'

const propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    price: PropTypes.string,
    detail: PropTypes.string,
    address: PropTypes.string,
  })).isRequired,
}

const Carousel = (props) => {
  const { data } = props

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 4,
    arrows: false,
    appendDots: (dots) => (
      <div
        style={{
          borderRadius: '10px',
          padding: '10px',
        }}
      >
        <ListDots
          className="listDots"
        >
          {' '}
          {dots}
          {' '}
        </ListDots>
      </div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <div>
      <Slider {...settings}>
        {data.map((item) => {
          const {
            id, title, price, detail, address,
          } = item

          return (
            <Item key={id} image={bgItem}>
              <div className="itemContent">
                <TitleSecondary fontSize={[36, 42, 60]} textAlign="center" pt={5} mb={1}>{title}</TitleSecondary>
                <div className="itemInfo">
                  <Price>{price}</Price>
                  <Text>{detail}</Text>
                  <Text>{address}</Text>
                </div>
                <Like>
                  <IconSvg svg="love" classes="svg-icon" title="Like" />
                </Like>
              </div>
            </Item>
          )
        })}
      </Slider>
    </div>
  )
}

Carousel.propTypes = propTypes

export default Carousel
