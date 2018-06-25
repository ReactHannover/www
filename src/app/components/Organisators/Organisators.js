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
        <Orgarnisator>
          <Picture>Pic</Picture>
          <Name>Name</Name>
          <Info>Info</Info>
        </Orgarnisator>
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
  display: flex;
  flex-wrap: wrap;
`
const Title = styled.h2`
  flex: 1 0 100%;
`

const Orgarnisator = styled.div`
  flex: 1 0 0%;
`

const Picture = styled.div``

const Name = styled.div``

const Info = styled.p``
