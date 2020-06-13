import styled from 'styled-components'

export const Div = styled.div`
  font-size: 16px;
  cursor: pointer;
  width: fit-content;
  margin: 5px 0;
  display: flex;
  align-items: center;
  &:hover {
    color: ${props => props.hoverColor}
  }
`