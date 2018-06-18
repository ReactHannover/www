import React from 'react'
import styled from 'styled-components'

export class About extends React.PureComponent {
  render () {
    return (
      <AboutWrapper>
        <Title>About</Title>
        <p>Lorem Ipsum</p>
      </AboutWrapper>
    )
  }
}

const AboutWrapper = styled.div`
  text-align: center;
`

const Title = styled.h2``
