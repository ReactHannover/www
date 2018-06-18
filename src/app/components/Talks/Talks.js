import React from 'react'
import styled from 'styled-components'
import { Speaker } from '../Speaker/Speaker'

export class Talks extends React.PureComponent {
  render () {
    return (
      <TalksContainer>
        <Title>Main Talks</Title>
        <TalksWrapper>
          <Talk>
            <Topic>Kick off & React High Order Components</Topic>
            <Speaker />
          </Talk>
          <Talk>
            <Topic>GraphQL & Apollo</Topic>
            <Speaker />
          </Talk>
        </TalksWrapper>
        <Title>Lighting Talks</Title>
        <TalksWrapper>
          <Talk>
            <Topic>GraphQL & Apollo</Topic>
            <Speaker />
          </Talk>
          <Talk>
            <Topic>GraphQL & Apollo</Topic>
            <Speaker />
          </Talk>
          <Talk>
            <Topic>GraphQL & Apollo</Topic>
            <Speaker />
          </Talk>
          <Talk>
            <Topic>GraphQL & Apollo</Topic>
            <Speaker />
          </Talk>
        </TalksWrapper>
      </TalksContainer>
    )
  }
}

const TalksContainer = styled.div`
  text-align: center;
`

const TalksWrapper = styled.div`
  display: flex;
`

const Title = styled.h2`
  text-transform: uppercase;
  letter-spacing: 2px;
`

const Talk = styled.div`
  flex: 1 0 0px;
  border: 1px solid #fff;
`
const Topic = styled.h3``
