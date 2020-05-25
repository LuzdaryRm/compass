import styled from 'styled-components'
import bgBox from '../../assets/images/img2.jpg'
import bgLines from '../../assets/images/bg-lines.png'

export const Box = styled.div`
  background-image: url(${bgBox});
  background-size: cover;
  background-position: center center;
  width: 100%;
  height: 100%;
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 170px;
  position:relative;
  transition: all .2s ease;
  cursor: pointer;

  img {
    width: 100%;
  }

  span {
    font-size: 12px;
    letter-spacing: 2px;
    color: #fff;
  }

  &:hover .boxHover {
    top: 0;
  }

  .boxHover {
    top: -101%;
  }
`

export const BoxHover = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${bgLines});
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all .2s ease;

  span {
    display: block;
    text-align: center;
    
    .boxTextMiddle {
      letter-spacing: 1.5px;
      font-size: 12px;
      font-weight: 500;

    }
  }
  
  .boxTextBottom {
    margin-top: 5px;
    font-family: Dido;
    font-size: 12px;
  }

  .iconBox img {
    width: 40px;
    margin-bottom: 15px;
  }
`
