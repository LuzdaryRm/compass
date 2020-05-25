import styled from 'styled-components'
import { space, typography } from 'styled-system'


export const TitleItalic = styled.div`
  font-family: 'Dido';
	font-style: italic;
  ${space}
  ${typography}
`

export const Title = styled.div`
  font-weight: 500;
  letter-spacing: 2px;
  ${space}
  ${typography};
`

export const TitleSecondary = styled.div`
  font-family: Open Sans;
  font-weight: bold;
  text-shadow: 1px 1px 1px #868282;
  text-align: center;
  line-height: 1.1;
  ${space}
  ${typography};
`

export const Pharagrap = styled.div`
  font-family: Open Sans;
  font-weight: 500;
  ${space}
  ${typography};
`
