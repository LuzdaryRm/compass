import styled from 'styled-components'
import { space } from 'styled-system'

const BannerStyle = styled.div`
  height: calc(100vh - 62px);
  background-image: url(${(props) => props.url});
	background-size: cover;
	background-position:center center;
	color: #fff;
	text-align: center;
	position: relative;
	display: flex;
	align-items: center;
  justify-content: center;
  ${space}
  
  .bannerInner {
		max-width: 800px;
		margin: 0 auto;
		padding-left: 20px;
		padding-right: 20px;
	}

	h2, span, .titleItalic {
		text-shadow: 0 0 7px #292929;
	}

	.titleItalic {
		max-width: 300px;
		margin-left: auto;
		margin-right: auto;
		line-height: 1.7;
	}

	span {
		font-weight: 500;

		@media (max-width: 768px) {
			font-size: 16px;
		}
	}

	h2 {
		font-size: 58px;

		@media (max-width: 768px) {
			font-size: 40px;
		}
	}

	.arrowDown {
		position: absolute;
		bottom: 40px;
		left: calc(50% - 11px)
	}
`

export default BannerStyle