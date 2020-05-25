import styled from 'styled-components'
import { space } from 'styled-system'

export const Grid = styled.div`
  ${space}
`
export const Row = styled.div`
  display: flex;
  align-items: ${(props) => props.align};
  flex-flow: row wrap;
  position: relative;
  ${space}
`

const media = {
  xs: (styles) => `
    @media (max-width: 768px) {
      ${styles}
    }
  `,
}

export const Col = styled.div`
  width: ${(props) => props.md};
  margin: 0;
  padding: ${(props) => props.spaceMd};

  @media (max-width: 768px) {
    width: ${(props) => props.sm};
    padding: ${(props) => props.spaceSm};
  }

  @media (max-width: 480px) {
    width: ${(props) => props.xs};
    padding: ${(props) => props.spaceSm};
  }
`

export const Col4 = styled.div`
  overflow: hidden;
  width: 33.3333%;
  margin: 0;
  padding: ${(props) => props.space};

  @media (max-width: 768px) {
    width: ${(props) => props.sm};
    padding: ${(props) => props.spaceSm};
  }

  @media (max-width: 480px) {
    width: ${(props) => props.xs};
    padding: ${(props) => props.spaceSm};
  }
`

export const Container = styled.div`
  padding-left: 15px;
  padding-right: 15px;

  &--fluid {
    max-width: 1680px !important;

    @media (max-width: 992px) {
      padding-left: 30px;
      padding-right: 30px;
    }
  }

  @media (max-width: 992px) {
    max-width: 940px;
  }

  @media (max-width: 1200px) {
    max-width: 1230px;

    &--compress {
      @media (max-width: 1200px) {
        max-width: 1100px;
      }
    }
  }

  ${space}
`

export const Flex = styled.div`
  display: flex;
  align-items: ${(props) => props.align}
`

export const ContentBox = styled.div`
  padding-left: 30px;
  padding-right: 30px;

  @media (min-width: 480px) {
    padding-left: 30px;
    padding-right: 30px;
  }

  @media (min-width: 768px) {
    padding-left: 60px;
    padding-right: 60px;
  }
`
