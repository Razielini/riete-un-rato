import React from 'react'
import { Dialog, Heart, Retweet } from '../Icons'

export const ToolOption = ({ icon = 'heart' }) => {
  const iconType = (icon) => {
    if (icon === 'heart') return <Heart />
    if (icon === 'dialog') return <Dialog />
    if (icon === 'retweet') return <Retweet />
  }

  return (
    <div>
      {
        iconType(icon)
      }
      <span>123</span>
    </div>
  )
}
