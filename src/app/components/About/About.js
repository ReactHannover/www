import React from 'react'
import styled from 'styled-components'

export class About extends React.PureComponent {
  render () {
    return (
      <AboutWrapper>
        <Title>About</Title>
        <p>React Hannover is a usergroup focused on JavaScript Frontend Development with the React Technology with its related stack. The idea has gained great interest around Lower-Saxony's JavaScript folks. We meet regularly on the 4th Thursday of every month at 6.30pm at tecRacer in Hanover. We do have Pizza und Drinks, so come up and let's have a nice talk.</p>
      </AboutWrapper>
    )
  }
}

const AboutWrapper = styled.div`
  text-align: center;
`

const Title = styled.h2``
