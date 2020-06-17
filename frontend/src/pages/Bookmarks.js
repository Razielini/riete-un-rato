import React from 'react'
import { Sidebar } from '../containers/Sidebar'
import { Content } from '../containers/Content'
import { Default } from '../layouts/Default'

import { ContentTitle } from '../components/ContentTitle'
import { ContentArticleBox} from '../components/ContentArticleBox'
const ICONS_DEFAULT = [
  {
    icon: 'dialog',
    hoverColor: '#1B6FA6',
    info: '123'
  },
  {
    icon: 'retweet',
    hoverColor: '#178A52',
    info: '123'
  },
  {
    icon: 'heart',
    hoverColor: 'rgba(224, 36, 94)',
    info: '123'
  },
  {
    icon: 'trash',
    hoverColor: 'rgba(224, 36, 94)',
    info: 'Eliminar'
  }
]

const PREOPTION = {
  icon: 'BackArrow',
  color: 'rgb(121, 75, 196)',
  fillColor: 'rgb(121, 75, 196)'
}

const POSTOPTION = {
  icon: 'Constellation',
  color: 'rgb(121, 75, 196)',
  fillColor: 'rgb(121, 75, 196)'
}

export const Bookmarks = () => {

  return (
    <Default
      className="App"
      title="Bookmarks"
      description="Super Description"
    >
      <Content>
        <ContentTitle title='Guardados' subtitle='# Chistes' preoption={PREOPTION} postoption={POSTOPTION} />
        <div className="mt-5-p">
          <ContentArticleBox icons={ICONS_DEFAULT} />
          <ContentArticleBox icons={ICONS_DEFAULT} />
          <ContentArticleBox icons={ICONS_DEFAULT} />
          <ContentArticleBox icons={ICONS_DEFAULT} />
          <ContentArticleBox icons={ICONS_DEFAULT} />
          <ContentArticleBox icons={ICONS_DEFAULT} />
          <ContentArticleBox icons={ICONS_DEFAULT} />
          <ContentArticleBox icons={ICONS_DEFAULT} />
          <ContentArticleBox icons={ICONS_DEFAULT} />
          <ContentArticleBox icons={ICONS_DEFAULT} />
          <ContentArticleBox icons={ICONS_DEFAULT} />
          <ContentArticleBox icons={ICONS_DEFAULT} />
        </div>
      </Content>
      <Sidebar />
    </Default>
  )
}