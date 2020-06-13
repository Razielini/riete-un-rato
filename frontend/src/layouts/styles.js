import styled from 'styled-components'

export const DefaultLayout = styled.main`
  box-sizing: border-box;
  display: grid;
  grid-template-columns: minmax(100px, 293px) 1fr minmax(100px, 293px);
  grid-template-areas: "Header Content Sidebar";
  grid-gap: 10px;
  justify-content: center;
  color: #FFF;
  max-width: 1200px;
  margin: 0 auto;
  @media screen and (max-width: 1024px){
    grid-template-columns: minmax(50px, 100px) 1fr;
    grid-template-areas: "Header Content";
  }
`