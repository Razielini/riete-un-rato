import React from 'react'
import { Sidebar } from '../containers/Sidebar'
import { Content } from '../containers/Content'
import { Default } from '../layouts/Default'

import { ContentTitle } from '../components/ContentTitle'
import { ContentPostBox } from '../components/ContentPostBox'
import { ContentArticleBox} from '../components/ContentArticleBox'

export const Explore = () => {
  return (
    <Default
      className="App"
      title="Explore"
      description="Super Description"
    >
      <Content>
        <ContentTitle title='Explorar' />
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