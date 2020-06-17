import React from 'react'
import {
  ProfileHeaderContainer,
  ProfileHeaderBackground,
  ProfileHeaderPhotoToolContainer,
  ProfileHeaderPhotoContainer,
  ProfileHeaderToolContainer,
  ProfileHeaderToolButton,
  ProfileHeaderPhoto,
  ProfileHeaderPhotoTitle,
  ProfileHeaderPhotoSubTitle,
  ProfileInfoContainer,
  BoldText
} from './styles'

export const ProfileHeader = () => {
  return (
    <ProfileHeaderContainer>
      <ProfileHeaderBackground />
      <ProfileHeaderPhotoToolContainer>
        <ProfileHeaderPhotoContainer>
          <ProfileHeaderPhoto />
          <ProfileHeaderPhotoTitle>Raziel Carvajal</ProfileHeaderPhotoTitle>
          <ProfileHeaderPhotoSubTitle>@Razielini</ProfileHeaderPhotoSubTitle>
        </ProfileHeaderPhotoContainer>
        <ProfileHeaderToolContainer>
          <ProfileHeaderToolButton>
            Editar Perfil
          </ProfileHeaderToolButton>
        </ProfileHeaderToolContainer>
      </ProfileHeaderPhotoToolContainer>
      <ProfileInfoContainer>
        <span>Mazatlán, Sinaloa, Kumori Labs</span>
        <span>Fecha de nacimiento: 2 de febrero de 1986</span>
        <span>Se unió en abril de 2009</span>
      </ProfileInfoContainer>
      <ProfileInfoContainer>
        <span><BoldText>38</BoldText> Siguiendo <BoldText className='ml-15px'>44</BoldText> Seguidores</span>
      </ProfileInfoContainer>
    </ProfileHeaderContainer>
  )
}
