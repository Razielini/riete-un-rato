import styled from 'styled-components'

export const Header = styled.section`
  width: 350px;
  box-sizing: border-box;
  padding: 10px;
`

export const Ul = styled.ul`
  padding-inline-start: 0px;
  list-style: none;
  width: fit-content;
`

export const Li = styled.li`
  font-size: 25px;
  cursor: pointer;
  &:hover {
    background-color: #000;
  }
`