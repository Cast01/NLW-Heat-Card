import styled from 'styled-components'

export const Main = styled.main`
  background: url(/images/Mobile.svg);
  height: 812px;
  width: 375px;
  position:absolute;

  @media (min-width: 375px) {
    background: url(/images/Desktop.png) no-repeat;
    top:120px;
    height:630px;
  }
`

export const Content = styled.div`
  width: 100%;
  height: calc(100% - 187px);
  display:flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  top: 187px;
  padding: 0 15px 15px;

  @media (min-width: 375px) {
    top: 70px;
  }
`

export const ProfileImage = styled.div`
  width:160px;
  height:186px;
  position: relative;

  div {
    position: absolute;
    z-index: 1;
  }

  .githubAvatar {
    clip-path: polygon(50% 0px, 100% 25%, 100% 75%, 50% 100%, 0px 75%, 0px 25%);
  }
`

export const Name = styled.span`
  font-size: 24px;
  font-weight: 700;
  color: #E1E1E6;
  margin-top: 12px;
`

export const GithubiconUsername = styled.div`
  margin-top: 6px;
  display:flex;
  align-items: center;

  a {
    margin-left: 10px;
    text-decoration: none;
    color: #C4C4CC;

    &:hover {
      text-decoration: underline;
    }
  }
`

export const GithubDescription = styled.p`
  text-align: center;
  height: 70px;
  overflow: auto;
  margin-top: 30px;
  font-size: 14px;
  color: #E1E1E6;
  margin-bottom: 40px;
`

export const SocialMedias = styled.nav`
  height:48px;
  
  ul {
    width: 100%;
    height: 100%;
    display:flex;
    justify-content: space-between;
    list-style: none;
    gap: 5px;
  }
`

export const Faixa = styled.div`
  background: url(/images/faixa.svg) no-repeat;
  width:64px;
  height:158px;
  z-index: 2;
  position:relative;

  @media (max-width: 375px) {
    display: none;
  }
`

export const Separator = styled.div`
  background-color: #000;
  width: 78px;
  height: 10px;
  position: absolute;
  top: 153px;
  z-index: 1;

  @media (max-width: 375px) {
    display: none;
  }
`
