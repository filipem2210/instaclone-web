import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import { TiUpload } from 'react-icons/ti';
import { toast } from 'react-toastify';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import api from "../../services/api";

import Header from '../../components/Header';

import { EditProfileContainer, Logout } from "./styles";

const validationSchema = Yup.object().shape({
  username: Yup.string().required('O nome de usuário é obrigatório'),
  name: Yup.string().required('O nome completo é obrigatório'),
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
});

export default function SignUp() {
  const history = useHistory();

  const [profileImage, setProfileImage] = useState(null);
  const [profileImagePreview, setProfileImagePreview] = useState(null);
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    api.get('/me').then(response => {
      setProfileImage(response.data.avatar);
      setUsername(response.data.username);
      setName(response.data.name);
      setEmail(response.data.email);
    });
  }, [])

  async function handleEditProfile(values) {
    const data = new FormData();

    data.append('avatar', profileImage);
    data.append('username', values.username);
    data.append('name', values.name);
    data.append('email', values.email);

    try {
      const response = await api.put("/me/edit", data);

      toast.success(response.data.message);
      setTimeout(function () { history.push('/'); }, 2000);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  function handleProfileImageChange(e) {
    if (e.target.files[0]) {
      setProfileImage(e.target.files[0]);
      setProfileImagePreview(URL.createObjectURL(e.target.files[0]));
    }
  }

  function handleLogout() {
    localStorage.clear();

    history.push('/');
  }

  return (
    <>

      <Header />

      <EditProfileContainer>
        <h1>Editar Perfil</h1>

        <Formik
          enableReinitialize
          initialValues={{
            username: username,
            name: name,
            email: email,
          }}
          validationSchema={validationSchema}
          onSubmit={values => {
            handleEditProfile(values);
          }}
        >
          {(props) => (
            <Form>
              <div className="profile-image-preview">
                {!profileImagePreview ? (
                  <img
                    src={`${process.env.REACT_APP_API_URL}/static/images/avatar/${profileImage ? profileImage : 'avatar.jpg'}`}
                    alt="Profile img preview"
                  />
                ) : (
                    <img src={profileImagePreview} alt="Profile img preview" />
                  )
                }
              </div>

              <label htmlFor="edit-profile-image"><TiUpload size={18} color="#fff" />Editar imagem de perfil</label>

              <input
                id="edit-profile-image"
                type="file"
                onChange={handleProfileImageChange}
              />

              <Field name="username" placeholder="Nome de usuário" />
              {props.errors.username && <p className="error"><ErrorMessage name="username" /></p>}

              <Field name="name" placeholder="Nome completo" />
              {props.errors.name && <p className="error"><ErrorMessage name="name" /></p>}

              <Field name="email" type="email" placeholder="Endereço de e-mail" />
              {props.errors.email && <p className="error"><ErrorMessage name="email" /></p>}

              <button type="submit">Salvar</button>
            </Form>
          )}
        </Formik>

        <Logout>
          <button onClick={handleLogout} type="button">Logout</button>
        </Logout>
      </EditProfileContainer>
    </>
  );
}
