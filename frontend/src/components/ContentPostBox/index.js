import React from 'react'
import { PostBox, Image, Textarea, BoxInput, BoxTool, SendButton } from './styles'

const IMG_DEFAULT = 'https://pbs.twimg.com/profile_images/378800000637224697/f1be358d9c197a0e563ab2b6594e39ae_bigger.png'
export const ContentPostBox = ({ avatar = IMG_DEFAULT }) => {
  return (
    <PostBox>
      <Image src={avatar} />
      <BoxInput>
        <Textarea>¿Qué está pasando?</Textarea>
        <BoxTool>
          <SendButton type="button">Enviar</SendButton>
        </BoxTool>
      </BoxInput>
    </PostBox>
  )
}
