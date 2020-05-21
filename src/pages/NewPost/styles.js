import styled from 'styled-components';

export const NewPostContainer = styled.main`
  width: 100%;
  max-width: 616px;
  margin: 20px auto;
  padding: 0 20px;
  border-radius: 3px;

  .hashtags{
    color: #3742fa !important;
  }

  img{
    width: 100%;
    display: block;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }

  form {
    width: 100%;
    padding: 30px;
    background: #fff;
    border: 1px solid #ddd;
    display: flex;
    flex-direction: column;

    input[type='file'] {
      display: none;
    }

    label {
      padding: 10px;
      font-size: 15px;
      border-radius: 3px;
      cursor: pointer;
      background-color: #0095f6;
      color: #fff;
      text-align: center;

      :active{
        opacity: .5;
      }

      svg{
        margin: 0 5px -2px 0;
      }
    }

    input {
      margin-top: 10px;
      height: 38px;
      border-radius: 4px;
      border: 1px solid #ddd;
      padding: 0 20px;
      font-size: 14px;
    }

    .hashtags{
      color: #3742fa !important;
    }

    button {
      padding: 10px 20px;
      border-radius: 4px;
      border: 0;
      background: #0095f6;
      color: #FFF;
      font-size: 14px;
      cursor: pointer;
      margin-top: 10px;

      :active{
        opacity: .5;
      }
    }
  }
`;
