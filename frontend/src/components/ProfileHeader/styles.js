import styled from 'styled-components'

export const ProfileHeaderContainer = styled.div`
  width: 100%;
  border-bottom: 1px solid rgb(56,68,77);
`

export const ProfileHeaderBackground = styled.div`
  background-image: url(https://c4.wallpaperflare.com/wallpaper/845/180/954/space-light-circle-planet-wallpaper-38f6cd38a0501c98c0cca14e880234ea.jpg);
  background-position: top center;
  background-size: cover;
  height: 300px;
`

export const ProfileHeaderPhotoToolContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: -70px;
  padding: 0px 15px;
  box-sizing: border-box;
`

export const ProfileHeaderPhotoContainer = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`

export const ProfileHeaderPhoto = styled.div`
  width: 140px;
  height: 140px;
  border-radius: 50%;
  background-image: url(https://c4.wallpaperflare.com/wallpaper/845/180/954/space-light-circle-planet-wallpaper-38f6cd38a0501c98c0cca14e880234ea.jpg);
  background-position: top center;
  background-size: cover;
  border: 5px solid #fff;
  box-sizing: border-box;
`

export const ProfileHeaderPhotoTitle = styled.span`
  font-size: larger;
  font-weight: 700;
  margin-top: 10px;
`

export const ProfileHeaderPhotoSubTitle = styled.span`
  font-size: medium;
  font-weight: 400;
  color: rgb(136, 153, 166);
`

export const ProfileHeaderToolContainer = styled.div`
  align-self: flex-end;
  box-sizing: border-box;
  align-self: center;
  margin-top: 50px;
`

export const ProfileHeaderToolButton = styled.button`
  padding: 10px 15px;
  border: 2px solid rgb(121, 75, 196);
  background: transparent;
  color: rgb(121, 75, 196);
  font-size: large;
  font-size: 400;
  border-radius: 20px;
  cursor: pointer;
  &:hover {
    background-color: rgba(121, 75, 196, 0.1);
  }
`

export const ProfileInfoContainer = styled.div`
  font-size: 15px;
  padding: 10px 15px;
  color: rgb(136, 153, 166);
`

export const BoldText = styled.span`
  font-weight: bold;
  color: #FFF;
`
