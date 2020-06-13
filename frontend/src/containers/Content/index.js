import React from 'react'
import { Section, PostSection } from './styles'

import { ContentTitle } from '../../components/ContentTitle'
import { ContentPostBox } from '../../components/ContentPostBox'
import { ContentArticleBox} from '../../components/ContentArticleBox'

export const Content = ({ children }) => {
  return (
    <Section>
      <ContentTitle />
      <ContentPostBox />
      <PostSection>
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
      </PostSection>
    </Section>
  )
}
