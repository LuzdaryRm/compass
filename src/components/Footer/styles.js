import styled from 'styled-components'
import { space } from 'styled-system'
import bgDots from '../../assets/images/dots-2.png'
import logoFooter from '../../assets/images/logo-footer.png'

export const FooterContent = styled.footer`
  .contentBox {
    padding-top: 50px;
    padding-bottom:50px;
    background-color: #000;
  }

  .linkMenu {    
    @media (max-width: 600px) {
      flex-wrap: wrap;
      justify-content: flex-start;
      padding-top: 20px;
    }
  }
`

export const ListContact = styled.ul`
  padding-top: 30px;

  p {
    color: #fff;
    font-size: 9px;
    padding-bottom: 5px;
  }

  li {
    padding-bottom: 20px;

    &:last-child {
      padding-bottom: 0;

      p {
        padding-bottom: 0;
      }
    }
  }
`

export const Dots = styled.div`
  width: 35px;
  height: 70px;
  background-image: url(${bgDots});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  position: absolute;
  top: -50px;
  right: 0;
`

export const LogoFooter = styled.div`
  width: 70px;
  height: 60px;
  background-image: url(${logoFooter});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  position: absolute;
  bottom: 0;
  right: 0;
`

export const Text = styled.div`
  font-size: 8px;
  line-height: 2.5;
  color: #fff;
  text-align: justify;

  ${space}
`
