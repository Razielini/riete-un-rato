import React from 'react'
import { Sidebar } from '../containers/Sidebar'
import { Content } from '../containers/Content'
import { Default } from '../layouts/Default'

import { ContentTitle } from '../components/ContentTitle'
import { ContentPostBox } from '../components/ContentPostBox'
import { ContentArticleBox} from '../components/ContentArticleBox'

export const Notifications = () => {
  return (
    <Default
      className="App"
      title="Notificaciones"
      description="Super Description"
    >
      <Content>
        <ContentTitle title='Notificaciones' />
        <ContentPostBox />
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
