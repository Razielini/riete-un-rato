import React from 'react'
import { Sidebar } from '../containers/Sidebar'
import { Content } from '../containers/Content'
import { Default } from '../layouts/Default'

import { ContentTitle } from '../components/ContentTitle'
import { ContentArticleBox} from '../components/ContentArticleBox'
import { ProfileHeader } from '../components/ProfileHeader'

export const Profile = () => {
  return (
    <Default
      className="App"
      title="Profile"
      description="Super Description"
    >
      <Content>
        <ContentTitle title='Perfil' />
        <ProfileHeader />
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