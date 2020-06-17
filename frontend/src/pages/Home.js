import React from 'react'
import { Sidebar } from '../containers/Sidebar'
import { Content } from '../containers/Content'
import { Default } from '../layouts/Default'

import { ContentTitle } from '../components/ContentTitle'
import { ContentPostBox } from '../components/ContentPostBox'
import { ContentArticleBox} from '../components/ContentArticleBox'

const POSTOPTION = {
  icon: 'Constellation',
  color: 'rgb(121, 75, 196)',
  fillColor: 'rgb(121, 75, 196)'
}

export const Home = () => {
  return (
    <Default
      className="App"
      title="Home"
      description="Super Description"
    >
      <Content>
        <ContentTitle />
        <ContentPostBox title='Inicio' postoption={POSTOPTION} />
        <div className="mt-5-p">
          <ContentArticleBox />
          <ContentArticleBox />
          <ContentArticleBox />
          <ContentArticleBox />
          <ContentArticleBox />
          <ContentArticleBox />
          <ContentArticleBox />
          <ContentArticleBox />
          <ContentArticleBox />
          <ContentArticleBox />
          <ContentArticleBox />
        </div>
      </Content>
      <Sidebar />
    </Default>
  )
}