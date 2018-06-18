import React from 'react'
import styled from 'styled-components'
import ReactLogo from '../../../assets/Logo/react-hannover.svg'

export class Header extends React.PureComponent {
  render () {
    return (
      <HeaderWrapper>
        <ReactLogo width='194' height='194' />
        <Title>Monthly React.JS Meetup in Hannover</Title>
        <Powered>powered by Incoqnito.io & tecRacer</Powered>
        <SubTitle>Next Meetup on 4.th July 2018</SubTitle>
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
