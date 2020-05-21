import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { toast } from 'react-toastify';
import * as Yup from 'yup';

import api from '../../services/api';

import Header from '../../components/Header';

import { EditPostContainer } from './styles';

const validationSchema = Yup.object().shape({
  place: Yup.string(),
  description: Yup.string().required('A descrição é obrigatória'),
  hashtags: Yup.string(),
});

export default function EditPost() {
  const history = useHistory();
  const location = useLocation();
  const post_id = location.state.id;

  const [image, setImage] = useState(null);
  const [place, setPlace] = useState('');
  const [description, setDescription] = useState('');
  const [hashtags, setHashtags] = useState('');

  useEffect(() => {
    api.get(`/posts/${post_id}`).then(response => {
      setImage(response.data.image);
      setPlace(response.data.place);
      setDescription(response.data.description);
      setHashtags(response.data.hashtags);
    });
  }, [post_id]);

  async function handleEditPost(data) {
    try {
      const response = await api.put(`/posts/${post_id}`, data);

      toast.success(response.data.message);
      setTimeout(function () { history.push('/'); }, 2000);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }

  return (
    <>
      <Header />

      <EditPostContainer>
        <h1>Editar Post</h1>

        {image &&
          <img src={`http://localhost:3333/api/static/images/post/${image}`} alt="Post preview" />
        }

        <Formik
          enableReinitialize
          initialValues={{
            place: place,
            description: description,
            hashtags: hashtags,
          }}
          validationSchema={validationSchema}
          onSubmit={values => {
            handleEditPost(values);
          }}
        >
          {(props) => (
            <Form>
              <Field name="place" placeholder="Local" />
              {props.errors.place && <p className="error"><ErrorMessage name="place" /></p>}

              <Field name="description" placeholder="Descrição" />
              {props.errors.description && <p className="error"><ErrorMessage name="description" /></p>}

              <Field name="hashtags" className="hashtags" placeholder="Hashtags" />
              {props.errors.hashtags && <p className="error"><ErrorMessage name="hashtags" /></p>}

              <button type="submit">Editar</button>
            </Form>
          )}
        </Formik>
      </EditPostContainer>
    </>
  );
}
