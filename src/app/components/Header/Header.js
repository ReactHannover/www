import React from 'react'
import styled from 'styled-components'
import ReactLogo from '../../../assets/Logo/react-hannover.svg'
import IncoqnitoLogo from '../../../assets/Logo/incoqnito.svg'

export class Header extends React.PureComponent {
  render () {
    return (
      <HeaderWrapper>
        <ReactLogo width='194' height='194' />
        <Title>Monthly React.JS Meetup in Hannover</Title>
        <Powered>powered by</Powered>
        <IncoqnitoLogo widht='64' height='64' />
        <SubTitle>Next Meetup on 4.th July 2018 at 6:30 pm!</SubTitle>
        <Button
          href='https://www.meetup.com/de-DE/React-Hannover/'
          target='_blank'>
            join the meetup
        </Button>
      </HeaderWrapper>
    )
  }
}

const HeaderWrapper = styled.div`
  text-align: center;
  margin: 48px auto 24px auto;

  // #ellipse-container {
  //   animation-name: rotate;
  //   animation-duration: 2s;
  //   animation-iteration-count: infinite;
  // }
  
  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

const Title = styled.h1``

const SubTitle = styled.h2``

const Powered = styled.h3``

const Button = styled.a`
  border: 1px solid #fff;
  font-family: inherit;
  font-size: inherit;
  color: inherit;
  background: none;
  cursor: pointer;
  padding: 16px 80px;
  display: inline-block;
  margin: 16px 32px;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 700;
  outline: none;
  position: relative;
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  transition: all 0.3s;
  text-decoration: none;


  &:hover {
    color: #61dafb;
    background: #fff;
  }
}
`
