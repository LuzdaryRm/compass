import React from 'react';
import svgs from '../Icons'
import IconStyle from './styles';

const IconSvg = ({
  svg, classes, click, title,
}) => {
  const svgRender = svgs[svg] || svgs.default

  return (
    <IconStyle>
      <svg
        viewBox={svgRender.viewBox}
        className={classes}
        title={title}
        xmlns="http://www.w3.org/2000/svg"
      >
        {svgRender.svg}
      </svg>

    </IconStyle>
  )
}

export default IconSvg
