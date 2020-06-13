import styled from 'styled-components'

export const Sidebar = styled.section`
  min-width: 300px;
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  grid-area: Sidebar;
  @media screen and (max-width: 1024px){
    display: none;
  }
`