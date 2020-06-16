import React, { useState } from 'react'
import { Li, Link } from './styles'
import { Cat, Bell, Bookmark, User, Home, Logo, OldPen } from '../Icons'

export const MenuOption = ({ title, icon = 'bell', to, hoverColor, fillColor }) => {
  const [isHover, setIsHover] = useState(false);

  const iconType = (icon, isHover, hoverColor, fillColor) => {
    icon = icon.toLowerCase()
    if (icon === 'home') return <Home isHover={isHover} hoverColor={hoverColor} fillColor={fillColor} />
    if (icon === 'cat') return <Cat isHover={isHover} hoverColor={hoverColor} fillColor={fillColor} />
    if (icon === 'bell') return <Bell isHover={isHover} hoverColor={hoverColor} fillColor={fillColor} />
    if (icon === 'bookmark') return <Bookmark isHover={isHover} hoverColor={hoverColor} fillColor={fillColor} />
    if (icon === 'user') return <User isHover={isHover} hoverColor={hoverColor} fillColor={fillColor} />
    if (icon === 'logo') return <Logo isHover={isHover} hoverColor={hoverColor} fillColor={fillColor} />
    if (icon === 'oldpen') return <OldPen isHover={isHover} hoverColor={hoverColor} fillColor={fillColor} />
  }

  return (
    <Li
      hoverColor={hoverColor}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <Link to={to}>
        {
          iconType(icon, isHover, hoverColor, fillColor)
        }
        <span>{title}</span>
      </Link>
    </Li>
  )
}
