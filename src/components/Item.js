import styled from 'styled-components';

export const Item = styled.div`
  height: 250px;
  width: 100%;
  color: #fff;
  padding: 10px;
  
  .itemContent {
    background-image: url(${(props) => props.image});
    background-size: cover;
    background-repeat: no-repeat;
    margin: 0;
    padding: 0 10px;
    font-size: 12px;
    padding-bottom: 20px;
    height: 100%;
    position: relative;
    
    @media (min-width: 480px) {
      padding: 10px;
      padding-bottom: 85px;
    }
  }

  .itemInfo {
    position: absolute;
    width: 100%;
    bottom: 20px;
    left: 0;
    padding: 0 30px;
  }

  span {
    text-shadow: 0 0 7px #292929;
    font-family: 'Open Sans';
    display:block;
  }
`

export const Price = styled.span`
  font-size: 16px;
  padding-bottom: 5px;

  @media (min-width: 768px) {
    font-size: 18px;
  }
`

export const Text = styled.span`
  font-weight: 500;
  font-size: 11px;

  @media (min-width: 768px) {
    font-size: 11px;
  }
`
