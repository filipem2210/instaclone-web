import styled from "styled-components";

export const SignInContainer = styled.main`
  width: 100%;
  max-width: 550px;
  margin: 20px auto;
  padding: 0 20px;
  border-radius: 3px;
  text-align: center;

  form {
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

export const Signup = styled.section`
  background-color: #fff;
  padding: 25px;
  text-align: center;
  margin-top: 10px;
  border: solid 1px #ddd;
  color: #8e8e8e;

  a{
    text-decoration: none;
    color: #0095f6;
  }
`;
