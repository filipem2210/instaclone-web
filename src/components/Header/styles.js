import styled from 'styled-components';

export const HeaderContainer = styled.nav`
  position: sticky;
  top: 0;
  width: 100%;
  background: #fff;
  box-sizing: border-box;
  height: 54px;
  border-bottom: 1px solid #ddd;
  z-index: 999;
`;

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 975px;
  margin: 0 auto;
  height: 54px;
  box-sizing: border-box;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .home-link{
    margin-top: 7px;
    height: 29px;

    :active {
      opacity: .5;
    }
  }

  .actions{
    a{
      position: relative;
      width: 23px;
      height: 23px;
      display: inline-block;
      margin-left: 20px;

      img{
        width: 23px;
        height: 23px;
      }

      :last-child img{
        border-radius: 50%;
      }
    }
  }
`;
