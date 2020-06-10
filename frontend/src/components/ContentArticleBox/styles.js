import styled from 'styled-components'

export const PostBox = styled.div`
  min-height: 100px;
  border-bottom: 1px solid rgb(37, 51, 65);
  padding: 10px;
  display: flex;
  justify-content: space-between;
  position: relative;
`

export const UserInfoName = styled.p`
  margin: 0;
  font-weight: 600;
`

export const UserInfoElements = styled.span`
  color: rgb(136, 153, 166);
  font-weight: 300;
`

export const BoxInfo = styled.span`
  color: #FFF;
  font-weight: 300;
`

export const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%
`

export const BoxInput = styled.div`
  width: 100%;
  padding: 0px 10px;
  background-color: transparent;
`

export const BoxTool = styled.div`
  width: 100%;
  padding: 15px 0 0 0;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
`
