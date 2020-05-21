import styled from 'styled-components';

export const EditPostContainer = styled.main`
  width: 100%;
  max-width: 616px;
  margin: 20px auto;
  padding: 0 20px;
  border-radius: 3px;

  img{
    width: 100%;
    display: block;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }

  form {
    width: 100%;
    padding: 20px;
    background: #fff;
    border: 1px solid #ddd;
    border-top: 0;
    display: flex;
    flex-direction: column;

    input {
      margin-top: 10px;
      height: 38px;
      border-radius: 4px;
      border: 1px solid #ddd;
      padding: 0 20px;
      font-size: 14px;
    }

    .hashtags{
      color: #3742fa;
    }

    button {
      padding: 10px 20px;
      border-radius: 4px;
      border: 0;
      background: #0095f6;
      color: #fff;
      font-size: 14px;
      cursor: pointer;
      margin-top: 10px;

      :active{
        opacity: .5;
      }
    }
  }
`;
