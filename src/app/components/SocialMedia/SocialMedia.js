import React from 'react'
import styled from 'styled-components'
import Twitter from '../../../assets/SocialMedia/twitter.svg'
import Facebook from '../../../assets/SocialMedia/facebook.svg'

export class SocialMedia extends React.PureComponent {
  render () {
    return (
      <SocialMediaWrapper>
        <Title>Follow us on</Title>
        <Media>
          <Twitter width='32' height='32' />
          <Facebook width='32' height='32' />
        </Media>
      </SocialMediaWrapper>
    )
  }
}

const SocialMediaWrapper = styled.div`
  text-align: center;
`
const Title = styled.h2``

const Media = styled.div``
