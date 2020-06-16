import React from 'react'
import { PostBox, Image, BoxInput, BoxTool, UserInfoName, UserInfoElements, BoxInfo } from './styles'
import { ToolOption } from '../ToolOption'

const IMG_DEFAULT = 'https://pbs.twimg.com/profile_images/378800000637224697/f1be358d9c197a0e563ab2b6594e39ae_bigger.png'
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
  }
]

export const ContentArticleBox = ({ avatar = IMG_DEFAULT, icons = ICONS_DEFAULT}) => {
  return (
    <PostBox>
      <Image src={avatar} />
      <BoxInput>
        <UserInfoName>Fulanito de Tal <UserInfoElements>@fulano - 22min</UserInfoElements></UserInfoName>
        <BoxInfo>
          The horrifying killings of George Floyd, Ahmaud Arbery, Breonna Taylor and far too many other Black people—and the protests they sparked—are shining a light on the brutal injustices that Black people experience every day…
        </BoxInfo>
        <BoxTool>
          {
            icons.map(myIcon => <ToolOption icon={myIcon.icon} hoverColor={myIcon.hoverColor} info={myIcon.info} /> )
          }
        </BoxTool>
      </BoxInput>
    </PostBox>
  )
}