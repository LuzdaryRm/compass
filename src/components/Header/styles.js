import styled, { css } from 'styled-components'

export const Nav = styled.nav`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding-top: 10px;
	padding-bottom: 10px;

	@media (max-width: 768px) {
		padding-top: 15px;
		padding-bottom: 15px;
	}

	.linkMenu {
		@media (max-width: 768px) {
			position: absolute;
			top: 0;
			left: -100%;
			width: 100%;
			height: 100%;
			display: block;
			transition: all .2s ease;
		}

		&.active {
			@media (max-width: 768px) {
				left: 0;
				z-index: 11;
				background-color: #1c1c1c;
				display: flex;
				align-items: center;
				justify-content: center;
				flex-flow: column wrap;
	
				li {
					padding-bottom: 30px;
	
					a {
						color: #fff;
						font-size: 12px;
					}
				}
			}
		}
	}

	.socialMedia {
		@media (max-width: 768px) {
			display: none;
		}
	}
`

export const Brands = styled.div`

	a {
		padding-right: 15px;

		&.logoLeft {
			@media (max-width: 992px) {
				display: none;
			}
		}

		img {
			width: 200px;
		}

		&.logoRight img {
			width: 120px;

			@media (max-width: 480px) {
				width: 100px;
				display: block;
			}
		}
	}
`

export const ListLinkMenu = styled.div`
	.listLinkMenuContent {
		@media (max-width: 768px) {
			justify-content: flex-end;
		}
	}
`

export const LinkMenu = styled.ul`
	display: flex;
	align-items: center;
	list-style: none;
	padding: 0;

	${(props) => props.primary && css`
		justify-content: flex-end;
		color: #fff;
		
		li {
			font-size: 10px;

			a {
				color: #fff !important;
			}
		}
  `}

	li {
		padding: 5px 10px;
		font-size: 11px;

		@media (max-width: 1024px) {
			padding-left:8px;
			padding-right: 8px;
		}

		@media (max-width: 992px) {
			padding-left:6px;
			padding-right: 6px;
		}

		a {
			font-weight: 500;
			color: #000;
		}
	}
`

export const ButtonToogle = styled.button`
	width: 27px;
	height: 20px;
	border: 0;
	background-color: #fff;
	border-top: 2.5px solid #000;
	border-bottom: 2.5px solid #000;
	position: relative;

	&::before {
		content: '';
		width: 100%;
		height: 2.5px;
		background-color: #000;
		position: absolute;
		top: calc(50% - 1px);
		left: 0;
	}
`
export const ButtonClose = styled.span`
position: absolute;
display: none;
top: 20px;
right: 20px;

@media (max-width: 768px) {
	display: block;
}

span {
	cursor: pointer;
	width: 20px;
	height: 20px;
	display: block;
	position: relative;

	&::after, &::before {
		content: '';
		display: block;
		width: 100%;
		height: 2px;
		background-color: #fff;
		top: 50%;
		position: absolute;
	}

	&::after {
		transform: rotate(45deg);
	}

	&::before {
		transform: rotate(130deg);
	}
}
`
