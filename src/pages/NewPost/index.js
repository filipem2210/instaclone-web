import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { TiUpload } from 'react-icons/ti';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { toast } from 'react-toastify';
import * as Yup from 'yup';

import api from '../../services/api';

import Header from '../../components/Header';

import { NewPostContainer } from './styles';

const validationSchema = Yup.object().shape({
  place: Yup.string(),
  description: Yup.string().required('A descrição é obrigatória'),
  hashtags: Yup.string(),
});

export default function NewPost() {
  const history = useHistory();

  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  async function handleNewPost(values) {
    const data = new FormData();

    data.append('image', image);
    data.append('place', values.place);
    data.append('description', values.description);
    data.append('hashtags', values.hashtags);

    if (!image) {
      toast.error('A imagem é obrigatória');
      return;
    }

    try {
      await api.post('/posts', data);

      history.push('/');
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }

  function handleImageChange(e) {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
      setImagePreview(URL.createObjectURL(e.target.files[0]));
    }
  }

  return (
    <>
      <Header />

      <NewPostContainer>
        <h1>Novo Post</h1>

        {image &&
          <img src={imagePreview} alt="Post preview" />
        }

        <Formik
          initialValues={{
            place: '',
            description: '',
            hashtags: '',
          }}
          validationSchema={validationSchema}
          onSubmit={values => {
            handleNewPost(values);
          }}
        >
          {(props) => (
            <Form>
              <label htmlFor="select_post_img">
                <TiUpload size={18} color="#fff" />
                {!imagePreview ? 'Selecionar imagem' : 'Editar'}
              </label>

              <input
                id="select_post_img"
                type="file"
                onChange={handleImageChange}
              />

              <Field name="place" placeholder="Local" />
              {props.errors.place && <p className="error"><ErrorMessage name="place" /></p>}

              <Field name="description" placeholder="Descrição" />
              {props.errors.description && <p className="error"><ErrorMessage name="description" /></p>}

              <Field name="hashtags" className="hashtags" placeholder="Hashtags" />
              {props.errors.hashtags && <p className="error"><ErrorMessage name="hashtags" /></p>}

              <button type="submit">Compartilhar</button>
            </Form>
          )}
        </Formik>
      </NewPostContainer>
    </>
  );
}
