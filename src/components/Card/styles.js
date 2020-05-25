import styled from 'styled-components'
import { grid, space } from 'styled-system'
import dots from '../../assets/images/dots.png'

export const CardInfoStyle = styled.div`
  ${space}
  ${grid}
  color: #fff;
  background-color: #000;
  padding: 140px 90px;
  position: relative;

  &::before {
    content: '';
    display: block;
    width: 50px;
    height: 50px;
    background-image: url(${dots});
    background-repeat: no-repeat;
    background-size: 100% 100%;
    position: absolute;
    bottom: 40px;
  }

  @media (max-width: 992px) {
    padding: 100px 50px;
    background-position: 50px bottom;
  }

  @media (max-width: 768px) {
    padding: 70px 50px 130px;
  }

  @media (max-width: 480px) {
    padding: 70px 20px 130px;
  }

  p {
    font-size: 11px;
    line-height: 2.2;
  }
  

`

export const CardImage = styled.div`
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center center;
  width: 100%;
  height: 100%;

  img {
    width: 100%;
  }
`
