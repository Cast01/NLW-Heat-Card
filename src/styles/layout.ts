import styled from 'styled-components'

export const Container = styled.div`
  height:134vh;
  min-width: 375px;
  display:flex;
  justify-content: center;
  background-color: #121214;

  .backgroundDegrade {
    position: absolute;
    width: 100%;
    height: 100%;
    background: url(/images/DesktopBackground.svg) no-repeat center 0px;
  }

  @media (max-width: 375px) {
    height:100vh;
  }
`