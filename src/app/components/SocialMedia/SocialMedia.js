import React from 'react'
import styled from 'styled-components'

export class SocialMedia extends React.PureComponent {
  render () {
    return (
      <SocialMediaWrapper>
        <Title>Social Media</Title>
        <Media>Twitter</Media>
        <Media>Facebook</Media>
      </SocialMediaWrapper>
    )
  }
}

const SocialMediaWrapper = styled.div`
  text-align: center;
`
const Title = styled.h2``

const Media = styled.div``
