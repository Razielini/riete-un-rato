import React from 'react'
import { DefaultLayout } from './styles'
import { Helmet } from 'react-helmet'

import { Header } from '../containers/Header'

export const Default = ({ children, title, description }) => {
  return (
    <DefaultLayout>
      <Helmet>
        {title && <title>{title} | Riete un rato 🃏</title>}
        {description && <meta name='description' content={description} />}
      </Helmet>
      <Header/>
      { children }
    </DefaultLayout>
  )
}
