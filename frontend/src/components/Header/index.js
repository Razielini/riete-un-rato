import React from 'react'
import { Header as HeaderContainer, Ul } from './styles'
import { MenuOption } from '../MenuOption'

export const Header = () => {
  const options = [
    {
      title: 'Inicio',
      icon: 'home'
    },
    {
      title: 'Explorar',
      icon: 'cat'
    },
    {
      title: 'Notificaciones',
      icon: 'bell'
    },
    {
      title: 'Guardados',
      icon: 'bookmark'
    },
    {
      title: 'Perfil',
      icon: 'user'
    },
  ]
  return (
    <HeaderContainer>
      <nav>
        <Ul>
          <li>Logo</li>
          {
            options.map(({ title, icon }) => <MenuOption title={ title } icon={ icon } />)
          }
        </Ul>
      </nav>
    </HeaderContainer>
  )
}
