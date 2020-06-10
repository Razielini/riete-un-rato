import React from 'react'
import { Title } from './styles'

export const ContentTitle = ({ title = 'inicio', option = 'none'}) => {
  return (
    <Title>
      <span>{ title}</span>
      <span>{option}</span>
    </Title>
  )
}
