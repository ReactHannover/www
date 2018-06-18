import React from 'react'
import styled from 'styled-components'

import { Header } from '../Header/Header'
import { Talks } from '../Talks/Talks'
import { About } from '../About/About'
import { Organisators } from '../Organisators/Organisators'
import { SocialMedia } from '../SocialMedia/SocialMedia'

export class Application extends React.PureComponent {
  render () {
    return (
      <Wrapper>
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

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: linear-gradient(to bottom, #61dafb, #0071bc);
  color: #fff;
  font-family: 'Open Sans';
`

const Content = styled.div`
  flex: 1 0 0px;
`
