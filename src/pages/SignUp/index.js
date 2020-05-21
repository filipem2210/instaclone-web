import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { TiUpload } from 'react-icons/ti';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { toast } from 'react-toastify';
import * as Yup from 'yup';

import { isAuthenticated } from '../../auth';

import api from "../../services/api";

import { SignUpContainer, SignIn } from "./styles";

import logo from "../../assets/instagram-logo-big.png";

const validationSchema = Yup.object().shape({
  username: Yup.string().required('O nome de usuário é obrigatório'),
  name: Yup.string().required('O nome completo é obrigatório'),
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
  password: Yup.string()
    .min(6, 'A senha precisa de no mínimo 6 caracteres')
    .required('A senha é obrigatória'),
});

export default function SignUp() {
  const history = useHistory();
  if (isAuthenticated()) history.push('/');

  const [avatar, setAvatar] = useState(null);
  const [avatarPreview, setAvatarPreview] = useState(null);

  async function handleSignUp(values) {
    const data = new FormData();

    data.append('avatar', avatar);
    data.append('username', values.username);
    data.append('name', values.name);
    data.append('email', values.email);
    data.append('password', values.password);

    try {
      const response = await api.post("/signup", data);

      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
      }

      history.push("/");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  function handleAvatarChange(e) {
    if (e.target.files[0]) {
      setAvatar(e.target.files[0]);
      setAvatarPreview(URL.createObjectURL(e.target.files[0]));
    }
  }

  return (
    <SignUpContainer>

      <Formik
        initialValues={{
          username: '',
          name: '',
          email: '',
          password: '',
        }}
        validationSchema={validationSchema}
        onSubmit={values => {
          handleSignUp(values);
        }}
      >
        {(props) => (
          <Form>
            <h1>
              <img src={logo} alt="Instagram logo" />
            </h1>

            <h2>Cadastre-se para ver fotos e vídeos dos seus amigos.</h2>

            {avatar &&
              <div className="avatar_preview">
                <img src={avatarPreview} alt="Avatar preview" />
              </div>
            }

            <label htmlFor="select_avatar"><TiUpload size={18} color="#fff" />{!avatar ? 'Selecione um avatar' : 'Editar'}</label>

            <input
              id="select_avatar"
              name="avatar"
              type="file"
              onChange={handleAvatarChange}
            />

            <Field name="username" placeholder="Nome de usuário" />
            {props.errors.username && <p className="error"><ErrorMessage name="username" /></p>}

            <Field name="name" placeholder="Nome completo" />
            {props.errors.name && <p className="error"><ErrorMessage name="name" /></p>}

            <Field name="email" type="email" placeholder="Endereço de e-mail" />
            {props.errors.email && <p className="error"><ErrorMessage name="email" /></p>}

            <Field name="password" type="password" maxLength="10" placeholder="Senha" />
            {props.errors.password && <p className="error"><ErrorMessage name="password" /></p>}

            <button type="submit">Cadastre-se</button>
          </Form>
        )}
      </Formik>

      <SignIn>
        Tem uma conta?&nbsp;&nbsp;
        <Link to="/signin">Conecte-se</Link>
      </SignIn>
    </SignUpContainer>
  );
}
