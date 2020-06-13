import React from 'react'
import { Sidebar as SidebarContainer } from './styles'
import { SearchBar } from '../../components/SearchBar'

export const Sidebar = () => {
  return (
    <SidebarContainer>
      <SearchBar />
      Este es el sidebar
    </SidebarContainer>
  )
}
