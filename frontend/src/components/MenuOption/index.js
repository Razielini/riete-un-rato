import React from 'react'
import { Li } from './styles'
import { Cat, Bell, Bookmark, User, Home } from '../Icons'

export const MenuOption = ({ title, icon = 'bell' }) => {
  const iconType = (icon) => {
    if (icon === 'home') return <Home />
    if (icon === 'cat') return <Cat />
    if (icon === 'bell') return <Bell />
    if (icon === 'bookmark') return <Bookmark />
    if (icon === 'user') return <User />
  }

  return (
    <Li>
      {
        iconType(icon)
      }
      <span>{title}</span>
    </Li>
  )
}
