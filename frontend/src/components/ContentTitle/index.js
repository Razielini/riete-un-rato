import React from 'react'
import { Title, TitleContainer, SpanTitle, SpanSubtitle, PreOptionContainer, PostOptionContainer } from './styles'
import { ToolOption } from '../ToolOption'

export const ContentTitle = ({ title = 'inicio', subtitle = null, preoption = null, postoption = null}) => {

  return (
    <TitleContainer>
      { preoption && <PreOptionContainer><ToolOption icon={preoption.icon} hoverColor={preoption.hoverColor} fillColor={preoption.fillColor} /></PreOptionContainer> }
      <Title>
        <SpanTitle>{ title }</SpanTitle>
        { subtitle && <SpanSubtitle>{ subtitle }</SpanSubtitle>}
      </Title>
      { postoption && <PostOptionContainer><ToolOption icon={postoption.icon} hoverColor={postoption.hoverColor} fillColor={postoption.fillColor} /></PostOptionContainer> }
    </TitleContainer>
  )
}
