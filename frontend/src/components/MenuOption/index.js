import React from 'react'
import { Li, Link } from './styles'
import { Cat, Bell, Bookmark, User, Home } from '../Icons'

export const MenuOption = ({ title, icon = 'bell', to }) => {
  const iconType = (icon) => {
    if (icon === 'home') return <Home />
    if (icon === 'cat') return <Cat />
    if (icon === 'bell') return <Bell />
    if (icon === 'bookmark') return <Bookmark />
    if (icon === 'user') return <User />
  }

  return (
    <Li>
      <Link to={to}>
        {
          iconType(icon)
        }
        <span>{title}</span>
      </Link>
    </Li>
  )
}
