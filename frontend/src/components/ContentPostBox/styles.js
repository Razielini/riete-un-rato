import styled from 'styled-components'

export const PostBox = styled.div`
  min-height: 100px;
  border-bottom: 10px solid rgb(37, 51, 65);
  padding: 10px;
  display: flex;
  justify-content: space-between;
  position: relative;
`

export const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%
`

export const Textarea = styled.textarea`
  width: 100%;
  height: 100px;
  background-color: transparent;
  border: none;
  color: #9197a3;
  font-size: 21px;
  font-weight: 300;
`

export const BoxInput = styled.div`
  width: 100%;
  padding: 0px 10px;
  background-color: transparent;
`

export const BoxTool = styled.div`
  width: 100%;
  padding: 10px;
  bottom: 0;
  display: flex;
  justify-content: flex-end;
`

export const SendButton = styled.button`
  background-color: rgb(121, 75, 196);
  padding: 10px 20px;
  font-size: large;
  color: #FFF;
  border: 0px solid transparent;
  border-radius: 30px;
`
