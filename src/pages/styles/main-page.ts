import styled from 'styled-components'

export const Main = styled.main`
  background: url(/images/Mobile.svg) no-repeat;
  height: 620px;
  min-width: 375px;
  display:flex;
  justify-content: center;
  align-items: center;
  position: relative;
`
export const Content = styled.div`
  width: 100%;
  height: calc(100% - 182px);
  position: absolute;
  top: 185px;
  padding: 0 15px 15px;
  display:flex;
  flex-direction: column;
  align-items: center;
`

export const ProfileImage = styled.div`
  width:160px;
  height:186px;
  position:relative;

  div {
    position: absolute;
    top: -13px;
    z-index: 1;
  }

  .avatar {
    clip-path: polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%);
    object-fit: cover;
  }
`

export const Name = styled.span`
  margin-top: 15px;
  font-weight: 700;
  font-size:24px;
  color: #E1E1E6;
`
export const GithubiconUsername = styled.div`
  margin-top: 5px;
  display: flex;
  align-items: center;

  a {
    color: #C4C4CC;
    margin-left: 12px;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`
export const GithubDescription = styled.p`
  margin-top: 25px;
  text-align: center;
  font-weight: 400;
  color: #E1E1E6;
  height: 69px;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, .5);
    border-radius: 20px;
  }
`
export const SocialMedias = styled.nav`
  margin-top: auto;
  height:48px;

  ul {
    width: 207px;
    display:flex;
    justify-content: space-between;
    list-style: none;
  }
`
