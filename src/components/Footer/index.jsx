import React from 'react'
import {
  Container, Flex, ContentBox, Grid, Col, Row,
} from '../Grid'
import {
  FooterContent, ListContact, Dots, LogoFooter, Text,
} from './styles'
import { SocialMediaLink } from '../SocialMedia/styles'
import IconSvg from '../IconSvg'
import { LinkMenu, Brands } from '../Header/styles'
import LogoMain from '../../assets/images/logo-main-inverse.png'
import Logo from '../../assets/images/logo-inverse.png'


const Footer = () => (
  <div>
    <Container>
      <FooterContent>
        <ContentBox className="contentBox">
          <Brands>
            <Flex align="center">
              <a className="logoLeft">
                <img src={LogoMain} alt="Logo" />
              </a>
              <a className="logoRight">
                <img src={Logo} alt="Logo" />
              </a>
            </Flex>
          </Brands>
          <Grid>
            <Row>
              <Col md="50%" xs="100%">
                <ListContact>
                  <li>
                    <p><strong>Connan Halsen</strong></p>
                    <p>Real Estate Concierge</p>
                  </li>
                  <li>
                    <p>(305) 705-5000</p>
                    <p>(888) 533 8736</p>
                  </li>
                  <li pb={0}>
                    <p pb={0}>2828 Coral Way, Miami Fl 33133</p>
                  </li>
                </ListContact>
              </Col>
              <Col spaceMd="" md="50%" xs="100%">
                <Dots />
                <LogoFooter />
              </Col>
            </Row>
            <Row mt={4}>
              <Col md="30%" xs="100%">
                <SocialMediaLink primary className="socialMedia__item">
                  <ul>
                    <li>
                      <p>
                        <IconSvg svg="facebook" classes="svg-icon" title="Facebook" />
                      </p>
                    </li>
                    <li>
                      <p><IconSvg svg="instagram" classes="svg-icon" title="Instagram" /></p>
                    </li>
                    <li>
                      <p><IconSvg svg="twitter" classes="svg-icon" title="Twitter" /></p>
                    </li>
                    <li>
                      <p><IconSvg svg="youtube" classes="svg-icon" title="Youtube" /></p>
                    </li>
                  </ul>
                </SocialMediaLink>
              </Col>
              <Col md="70%" xs="100%">
                <LinkMenu primary p={0} className="linkMenu">
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">Exclusive Listings</a>
                  </li>
                  <li>
                    <a href="#">Search Properties</a>
                  </li>
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="#">Blog</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                </LinkMenu>
              </Col>
            </Row>
          </Grid>
          <Text pt={4}>
            Connan Halssen is a real estate agent affiliated with Compass. Compass Florida, LLC D/B/A Compass is a licensed real estate broker and abides by equal housing opportunity laws. All material presented herein is intended for informational purposes only. Information is compiled from sources deemed reliable but is subject to errors, omissions, changes in price, condition, sale, or withdrawal without notice. No statement is made as to accuracy of any description. All measurements and square footages are approximate. This is not intended to solicit property already listed. Nothing herein shall be construed as legal, accounting or other professional advice outside the realm of real estate brokerage.
          </Text>
          <Text pt={3}>
            © Copyright 2019
          </Text>

        </ContentBox>
      </FooterContent>
    </Container>
  </div>
)

export default Footer
