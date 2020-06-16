import styled from 'styled-components'
import { Link as LinkRouter} from '@reach/router'

export const Li = styled.li`
  cursor: pointer;
  padding: 5px 20px;
  width: max-content;
  margin: 0;
  @media screen and (max-width: 1300px){
    padding: 10px 0px;
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
  display: flex;
  align-items: center;
  font-weight: 500;
  &:hover {
    background-color: rgba(121, 75, 196, 0.3);
    color: #794BC4;
    border-radius: 30px;
  }
  &[aria-current] {
    color: #794BC4;
    svg {
      fill: #794BC4;
    }
  }
`