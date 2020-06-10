import styled from 'styled-components'

export const PostBox = styled.div`
  min-height: 150px;
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
`

export const BoxInput = styled.div`
  width: 100%;
  padding: 0px 10px;
  background-color: transparent;
`

export const BoxTool = styled.div`
  width: 100%;
  padding: 10px;
  position: absolute;
  bottom: 0;
`
