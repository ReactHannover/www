import React from 'react'
import styled from 'styled-components'
import Github from '../../../assets/SocialMedia/github.svg'
import Instagram from '../../../assets/SocialMedia/instagram.svg'
import Facebook from '../../../assets/SocialMedia/facebook.svg'

export class Speaker extends React.PureComponent {
  render () {
    return (
      <SpeakerWrapper>
        <Image>
          <img
            src='https://images.unsplash.com/photo-1476493279419-b785d41e38d8?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4920987ab334960a4d39b9db70555ef5&auto=format&fit=crop&w=2500&q=80'
            style={{ borderRadius: 100, width: 128, height: 128 }}
          />
        </Image>
        <General>
          <Name>Christian Birg</Name>
          <Job>CTO Incoqnito.io</Job>
          <SocialList>
            <SocialItem><Github /></SocialItem>
            <SocialItem><Instagram /></SocialItem>
            <SocialItem><Facebook /></SocialItem>
          </SocialList>
        </General>
        <Text>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna Stet clita kasd gubergren, no sea ta.</Text>
      </SpeakerWrapper>
    )
  }
}

const SpeakerWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin: 16px;
`

const Image = styled.div`
  flex: 0 0 33%;
`

const Name = styled.h4`
  margin: 0;
  margin-top: 8px;
  text-transform: uppercase;
  font-size: 1.2em;
  letter-spacing: 2px;

`

const Job = styled.h4`
  margin: 0;
  font-style: italic;
  font-weight: 300;
  margin-top: 8px;
`

const SocialList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  margin-top: 8px;
  display: inline-flex;
`

const SocialItem = styled.li`
  width: 32px;
  height: auto;
  margin: 8px;
`

const Text = styled.p``

const General = styled.div`
  flex: 1 0 66%
`
