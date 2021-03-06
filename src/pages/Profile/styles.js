import styled from "styled-components";

export const EditProfileContainer = styled.main`
  width: 100%;
  max-width: 550px;
  margin: 20px auto;
  padding: 0 20px;
  border-radius: 3px;

  form{
    width: 100%;
    padding: 20px;
    background: #fff;
    border: 1px solid #ddd;
    display: flex;
    flex-direction: column;

    h1{
      width: 100%;

      img {
        max-width: 200px;
      }
    }

    h2{
      color: #8e8e8e;
      font-size: 1.0625rem;
      font-weight: 500;
      line-height: 20px;
      margin-bottom: 15px;
      text-align: center;
      font-style: normal;
    }

    .profile-image-preview{
      width: 100%;
      display: flex;
      justify-content: center;

      img{
        width: 150px;
        height: 150px;
        margin: 0 0 20px 0;
        border-radius: 50%;
      }
    }

    input[type='file'] {
      display: none;
    }

    label {
      padding: 10px;
      font-size: 0,9375‬rem;
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
      font-size: 0.875rem;
    }

    button {
      padding: 10px 20px;
      border-radius: 4px;
      border: 0;
      background: #0095f6;
      color: #FFF;
      font-size: 0.875rem;
      cursor: pointer;
      margin-top: 10px;

      :active{
        opacity: .5;
      }
    }
  }
`;

export const Logout = styled.section`
  background-color: #fff;
  padding: 25px;
  text-align: center;
  margin-top: 10px;
  border: solid 1px #ddd;
  color: #8e8e8e;

  button{
    padding: 10px 20px;
    border-radius: 4px;
    border: 0;
    background: #e02041;
    color: #FFF;
    font-size: 0.875rem;
    cursor: pointer;

    :active{
      opacity: .5;
    }
  }
`;
