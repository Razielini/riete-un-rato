import React from 'react'
import { Section } from './styles'

import { ContentTitle } from '../ContentTitle'
import { ContentPostBox } from '../ContentPostBox'
import { ContentArticleBox} from '../ContentArticleBox'

export const Content = ({ children }) => {
  return (
    <Section>
      <ContentTitle />
      <ContentPostBox />
      <ContentArticleBox />
    </Section>
  )
}
