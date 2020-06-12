import React, { useState } from 'react'
import { Dialog, Heart, Retweet } from '../Icons'
import { Div } from './styles'

export const ToolOption = ({ icon = 'heart', hoverColor }) => {
  const [isHover, setIsHover] = useState(false);

  const iconType = (icon, isHover, hoverColor) => {
    if (icon === 'heart') return <Heart isHover={isHover} hoverColor={hoverColor} />
    if (icon === 'dialog') return <Dialog isHover={isHover} hoverColor={hoverColor} />
    if (icon === 'retweet') return <Retweet isHover={isHover} hoverColor={hoverColor} />
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
      <span>123</span>
    </Div>
  )
}
