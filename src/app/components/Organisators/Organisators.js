import React from 'react'
import styled from 'styled-components'

export class Organisators extends React.PureComponent {
  render () {
    return (
      <OrganisatorsWrapper>
        <Title>Organisators</Title>
        <Orgarnisator>
          <Picture>Pic</Picture>
          <Name>Name</Name>
          <Info>Info</Info>
        </Orgarnisator>
      </OrganisatorsWrapper>
    )
  }
}

const OrganisatorsWrapper = styled.div`
  text-align: center;
`
const Title = styled.h2``

const Orgarnisator = styled.div``

const Picture = styled.div``

const Name = styled.div``

const Info = styled.p``
