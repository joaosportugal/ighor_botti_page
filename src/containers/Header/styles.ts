import styled from 'styled-components'

export const MainHeader = styled.header`
  position: sticky;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  background-color: #fff;

  .header__logo {
    height: 80px;
    width: auto;
    margin-left: 64px;
  }

  .navbar {
    display: flex;
    gap: 28px;
  }

  .socialMedias {
    display: flex;
    gap: 16px;
    margin-right: 64px;
  }
`
