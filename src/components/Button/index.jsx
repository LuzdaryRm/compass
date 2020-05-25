import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { space, typography } from 'styled-system'

const propTypes = {
  children: PropTypes.node.isRequired,
}

const StyledButton = styled.button`
  padding: .5rem 1.9rem;
  font-weight: 500;
  background-color: #000;
  color: #fff;
  border: 0;
  font-family: Montserrat;
  cursor: pointer;
  letter-spacing: 2px;

  ${space}
  ${typography}

  ${(props) => props.primary && css`
    padding-top: .9rem;
    padding-bottom: .9rem;
    background-color: transparent;
    border: 1px solid #fff;
    color: #fff;
    text-shadow: 0 0 7px #292929;
  `}

  ${(props) => props.secondary && css`
    padding-top: .9rem;
    padding-bottom: .9rem;
    background-color: transparent;
    border: 1px solid #000;
    color: #000;
  `}
`

const Button = React.forwardRef((props, ref) => {
  const { children, ...otherProps } = props

  return (
    <StyledButton type="button" ref={ref} {...otherProps}>
      {children}
    </StyledButton>
  );
})

Button.propTypes = propTypes

export default Button