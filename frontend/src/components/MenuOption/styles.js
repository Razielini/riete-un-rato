import styled from 'styled-components'
import { Link as LinkRouter} from '@reach/router'

export const Li = styled.li`
  cursor: pointer;
  padding: 10px 20px;
  width: max-content;
  margin: 5px 0;
  @media screen and (max-width: 1300px){
    span {
      display: none;
    }
  }
`

export const Link = styled(LinkRouter)`
  font-size: 21px;
  cursor: pointer;
  padding: 10px 20px;
  width: max-content;
  margin: 5px 0;
  text-decoration: none;
  color: #FFF;
  &:hover {
    background-color: #794BC4;
    border-radius: 30px;
  }
  &[aria-current] {
    background-color: #794BC4;
    border-radius: 30px;
  }
`