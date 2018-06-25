import React from 'react'
import styled, { injectGlobal } from 'styled-components'
import Particles from 'react-particles-js'

import { Header } from '../Header/Header'
import { Talks } from '../Talks/Talks'
import { About } from '../About/About'
import { Organisators } from '../Organisators/Organisators'
import { SocialMedia } from '../SocialMedia/SocialMedia'

export class Application extends React.PureComponent {
  render () {
    return (
      <Wrapper>
        <Particles className='particles' />
        <Header />
        <Content>
          <Talks />
          <About />
          <Organisators />
          <SocialMedia />
        </Content>
      </Wrapper>
    )
  }
}

injectGlobal`
  #root {
    background: linear-gradient(to bottom,#61dafb,#0071bc);
  }

  .particles {
    position: absolute;
    z-index: 1;
  }
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
  font-family: 'Open Sans';
  margin: 0 auto;
  max-width: 1080px;
`

const Content = styled.div`
  flex: 1 0 0px;
`
