import styled from 'styled-components';

export const FeedContainer = styled.section`
  width: 100%;
  max-width: 640px;
  margin: 20px auto 0px;
  padding: 0 20px;
`;

export const Post = styled.article`
  background: #fff;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 3px;
  margin-bottom: 30px;

  >img{
    width: 100%;
    display: block;
  }
`;

export const PostHeader = styled.header`
  padding: 15px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .post-info{
    display: flex;
    flex-direction: row;

    .avatar{
      width: 32px;
      height: 32px;

      a{
        width: 100%;
        height: 100%;
        display: inline-block;
      }

      img{
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }

    .username-place{
      margin-left: 16px;
      display: flex;
      flex-direction: column;
      justify-content: center;

      .username{
        font-size: 14px;
        line-height: 18px;
        color: #262626;
        font-weight: 600;
        font-style: normal;
        cursor: pointer;
      }

      .place{
        font-size: 12px;
        color: #666;
        font-weight: 400;
        line-height: 15px;
        font-style: normal;
        cursor: pointer;
      }
    }
  }

  .actions{
    display: flex;
    justify-content: center;

    button{
      background: transparent;
      border: 0;
      cursor: pointer;
      margin: 0 10px;
    }

    svg{
      cursor: pointer;
    }
  }
`;

export const PostFooter = styled.footer`
  padding: 20px;

  .actions{
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;

    div{
      display: flex;
      align-items: center;

      button{
        background: transparent;
        border: 0;
        cursor: pointer;
        margin-right: 12px;
        height: 28px;
      }

      img{
        height: 25px;
        width: 25px;
        margin-right: 12px;
        cursor: pointer;

        :last-child{
          margin-right: 0;
        }
      }

      svg{
        stroke-width: 1;
      }
    }
  }

  p{
    font-size: 13px;
    margin-top: 10px;
    line-height: 18px;

    span{
      color: #3742fa;
      display: block;
    }
  }
`;

export const PostComments = styled.section`
  border-top: 1px solid #ddd;

  form{
    height: 60px;
    position: relative;
    display: flex;
    justify-content: space-between;

    textarea{
      border: 0;
      font-size: 14px;
      resize: none;
      max-height: 60px;
      display: flex;
      flex-grow: 1;
      padding-left: 20px;
      align-self: center;
      height: 16px;

      ::placeholder{
        color: #999;
      }

      :focus{
        height: 100vh;
      }
    }

    button{
      color: #0095f6;
      font-weight: bold;
      background: transparent;
      border: 0;
      padding: 20px;
      cursor: pointer;
    }
  }
`;
