import styled from 'styled-components';

export const ListDots = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  padding: 0;
  padding-top: 20px;

  li.slick-active button {
    background-color: #121212;
  }

  button {
    border-radius: 50%;
    width: 9px;
    height: 9px;
    background-color: #cecece;
    text-indent: -9999px;
    border: 0;
    margin: 5px;
    padding: 0px;
    transition: .2s;

    &:focus {
      outline: none;
    }
  }
`

export const Like = styled.div`
  position: absolute;
  top: 15px;
  right: 20px;
  font-size: 25px;
`
