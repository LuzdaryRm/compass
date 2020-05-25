import { createGlobalStyle } from 'styled-components'
import MontserratRegularWoff from '../assets/fonts/Montserrat-Regular.woff'
import MontserratRegularWoffTwo from '../assets/fonts/Montserrat-Regular.woff2'
import MontserratMedumWoff from '../assets/fonts/Montserrat-Medium.woff'
import MontserratMedumWoffTwo from '../assets/fonts/Montserrat-Medium.woff2'
import MontserratBoldWoff from '../assets/fonts/Montserrat-Bold.woff'
import MontserratBoldWoffTwo from '../assets/fonts/Montserrat-Bold.woff2'
import MontserratItalicWoff from '../assets/fonts/Montserrat-Italic.woff'
import MontserratItalicWoffTwo from '../assets/fonts/Montserrat-Italic.woff2'
import DidoItalicWoff from '../assets/fonts/DidotLTStd-Italic.woff'
import DidoItalicWoffTwo from '../assets/fonts/DidotLTStd-Italic.woff2'
import OpenSansBoldWoff from '../assets/fonts/OpenSans-Bold.woff'
import OpenSansBoldWoffTwo from '../assets/fonts/OpenSans-Bold.woff2'
import OpenSansSemiBoldWoff from '../assets/fonts/OpenSans-SemiBold.woff'
import OpenSansSemiBoldWoffTwo from '../assets/fonts/OpenSans-SemiBold.woff2'
import slickCss from '../../node_modules/slick-carousel/slick/slick.css';


const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    src: url('${MontserratRegularWoff}') format('woff'),
    url('${MontserratRegularWoffTwo}') format('woff2');
  }

  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    src: url('${MontserratMedumWoff}') format('woff'),
    url('${MontserratMedumWoffTwo}') format('woff2');
  }

  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    src: url('${MontserratBoldWoff}') format('woff'),
    url('${MontserratBoldWoffTwo}') format('woff2');
  }

  @font-face {
    font-family: 'Montserrat';
    font-style: italic;
    font-weight: normal;
    src: url('${MontserratItalicWoff}') format('woff'),
    url('${MontserratItalicWoffTwo}') format('woff2');
  }

  @font-face {
    font-family: 'Dido';
    font-style: italic;
    font-weight: normal;
    src: url('${DidoItalicWoff}') format('woff'),
    url('${DidoItalicWoffTwo}') format('woff2');
  }

  @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: bold;
    src: url('${OpenSansBoldWoff}') format('woff'),
    url('${OpenSansBoldWoffTwo}') format('woff2');
  }

  @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 500;
    src: url('${OpenSansSemiBoldWoff}') format('woff'),
    url('${OpenSansSemiBoldWoffTwo}') format('woff2');
  }

  * {
    box-sizing: border-box;
  }
  
  body {
    font-family: 'Montserrat';
    font-weight: normal;
    font-size: 16px;
    margin: 0;
  }

  ol, ul, p, h1, h2, h3, h4, h5 {
    margin: 0;
    padding: 0;
  }

  ol, ul {
    list-style: none;
  }

  button {
    cursor: pointer;
    
    &:focus {
      outline: 0;
    }
  }

  a {
    text-decoration: none;
  }

  ${slickCss}
`

export default GlobalStyle
