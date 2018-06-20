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
  flex: 1 0 0;
  border: 1px solid #fff;
  border-radius: 8px;
  background: #f5f5f5;
  color: #000;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  margin: 8px;
  overflow: hidden;
`

const Topic = styled.h3``
