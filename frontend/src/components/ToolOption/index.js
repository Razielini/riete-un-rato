import React, { useState } from 'react'
import { Dialog, Heart, Retweet, Trash, BackArrow, Constellation } from '../Icons'
import { Div } from './styles'

export const ToolOption = ({ icon = 'heart', hoverColor, fillColor, info = null }) => {
  const [isHover, setIsHover] = useState(false);

  const iconType = (icon, isHover, hoverColor) => {
    icon = icon.toLowerCase()
    if (icon === 'heart') return <Heart isHover={isHover} hoverColor={hoverColor} fillColor={fillColor} />
    if (icon === 'dialog') return <Dialog isHover={isHover} hoverColor={hoverColor} fillColor={fillColor} />
    if (icon === 'retweet') return <Retweet isHover={isHover} hoverColor={hoverColor} fillColor={fillColor} />
    if (icon === 'trash') return <Trash isHover={isHover} hoverColor={hoverColor} fillColor={fillColor} />
    if (icon === 'backarrow') return <BackArrow isHover={isHover} hoverColor={hoverColor} fillColor={fillColor} />
    if (icon === 'constellation') return <Constellation isHover={isHover} hoverColor={hoverColor} fillColor={fillColor} />
  }

  return (
    <Div
      hoverColor={hoverColor}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {
        iconType(icon, isHover, hoverColor)
      }
      { info && <span>{info}</span> }
    </Div>
  )
}
