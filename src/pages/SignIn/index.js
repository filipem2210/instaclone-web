import React from "react";
import { useHistory, Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { toast } from 'react-toastify';
import * as Yup from 'yup';

import { isAuthenticated } from '../../auth';

import api from "../../services/api";

import { SignInContainer, Signup } from "./styles";

import logo from "../../assets/instagram-logo-big.png";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
  password: Yup.string()
    .min(6, 'A senha precisa de no mínimo 6 caracteres')
    .required('A senha é obrigatória'),
});

export default function SignIn() {
  const history = useHistory();
  if (isAuthenticated()) history.push('/');

  async function handleSignIn(data) {
    try {
      const response = await api.post("/signin", data);

      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
      }

      history.push("/");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <SignInContainer>

      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={validationSchema}
        onSubmit={values => {
          handleSignIn(values);
        }}
      >
        {(props) => (
          <Form>
            <h1>
              <img src={logo} alt="Instagram logo" />
            </h1>

            <Field name="email" type="email" placeholder="Endereço de e-mail" />
            {props.errors.email && <p className="error"><ErrorMessage name="email" /></p>}

            <Field name="password" type="password" maxLength="10" placeholder="Senha" />
            {props.errors.password && <p className="error"><ErrorMessage name="password" /></p>}

            <button type="submit">Entrar</button>
          </Form>
        )}
      </Formik>

      <Signup>
        Não tem uma conta?&nbsp;&nbsp;
        <Link to="/signup">Registre-se</Link>
      </Signup>
    </SignInContainer>
  );
}
