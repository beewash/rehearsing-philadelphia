import React from "react"
import styled from 'styled-components'

const ContainerStyles = styled.div`
  height: calc(100vh - 80px);

  @media (min-width: 450px) {
    padding: 2em;
  }
`

const Container = ({ children }) => {
  return <ContainerStyles>{children}</ContainerStyles>
}

export default Container
