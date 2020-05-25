import styled, { css } from 'styled-components'

export const SocialMediaStyle = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 10.5px;
  padding-bottom: 5px;

  .socialMedia__item {
    border-left: 1px solid #000;
    padding-left: 10px;
    padding-right: 10px;

    span {
      font-weight: 500;
    }

    &:first-of-type {
      border-left: 0;
    }
  }
`

export const SocialMediaLink = styled.div`
  display: flex;
  align-items: center;
  height: 100%;

  ul {
    display: flex;
    font-size: 12px;

    li {
      padding-left: 5px;
      padding-right: 5px;

      &:first-of-type {
        padding-left: 0;
      }
    }
  }

  ${(props) => props.primary && css`
    color: #fff;
  `}
`
