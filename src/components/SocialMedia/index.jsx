import React from 'react'
import { SocialMediaStyle, SocialMediaLink } from './styles'
import IconSvg from '../IconSvg'

const SocialMedia = () => (
  <div>
    <SocialMediaStyle className="socialMedia">
      <SocialMediaLink className="socialMedia__item">
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
      <div className="socialMedia__item">
        <span>info@compass.com</span>
      </div>
      <div className="socialMedia__item">
        <span>305.705.5000</span>
      </div>
    </SocialMediaStyle>
  </div>
)

export default SocialMedia
