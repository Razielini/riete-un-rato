import styled from 'styled-components'

export const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  border-bottom: 1px solid rgb(56, 68, 77);
`

export const Title = styled.div`
  width: 100%;
  display: flex;
  padding: 10px 15px;
  justify-content: space-between;
  box-sizing: border-box;
  flex-direction: column;
`

export const SpanTitle = styled.span`
  font-size: 25px;
  font-weight: 500;
`

export const SpanSubtitle = styled.span`
  font-size: 14px;
  font-weight: 300;
  color: rgb(136, 153, 166);
`

export const PreOptionContainer = styled.div`
  padding: 10px 15px;
  align-self: center;
  justify-self: center;
  svg {
    width: 23px;
  }
`

export const PostOptionContainer = styled.div`
  padding: 10px 15px;
  align-self: center;
  justify-self: center;
  svg {
    width: 23px;
  }
`
