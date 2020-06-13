import React from 'react'
import { Header as HeaderContainer, Ul, Nav } from './styles'
import { MenuOption } from '../../components/MenuOption'

export const Header = () => {
  const options = [
    {
      title: 'Inicio',
      icon: 'home',
      to: '/'
    },
    {
      title: 'Explorar',
      icon: 'cat',
      to: '/explore'
    },
    {
      title: 'Notificaciones',
      icon: 'bell',
      to: '/notifications'
    },
    {
      title: 'Guardados',
      icon: 'bookmark',
      to: '/bookmarks'
    },
    {
      title: 'Perfil',
      icon: 'user',
      to: '/profile'
    },
    {
      title: 'Publicar',
      icon: 'user',
      to: '/'
    },
  ]
  return (
    <HeaderContainer>
      <Nav>
        <Ul>
          <li>Logo</li>
          {
            options.map(({ title, icon, to }) => <MenuOption title={ title } icon={ icon } to={to} />)
          }
        </Ul>
      </Nav>
    </HeaderContainer>
  )
}
