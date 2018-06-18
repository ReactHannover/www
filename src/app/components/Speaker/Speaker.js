import React from 'react'
import styled from 'styled-components'

export class Speaker extends React.PureComponent {
  render () {
    return (
      <SpeakerWrapper>
        <img src='https://dummyimage.com/128x128/000/fff' />
        <Name>Christian Birg</Name>
        <Job>CTO Incoqnito.io</Job>
        <SocialList>
          <SocialItem>GitHub</SocialItem>
          <SocialItem>Instagram</SocialItem>
          <SocialItem>Facebook</SocialItem>
        </SocialList>
        <Text>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</Text>
      </SpeakerWrapper>
    )
  }
}

const SpeakerWrapper = styled.div``

const Name = styled.h4``

const Job = styled.h4``

const SocialList = styled.ul``

const SocialItem = styled.li``

const Text = styled.p``
