import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { FiEdit, FiTrash2, FiMoreHorizontal } from "react-icons/fi";
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import { toast } from 'react-toastify';
import io from 'socket.io-client';

import api from '../../services/api';

import Header from '../../components/Header';

import { FeedContainer, Post, PostHeader, PostFooter, PostComments } from './styles';

import comment from '../../assets/comment.svg';
import send from '../../assets/send.svg';
import bookmark from '../../assets/bookmark.svg';

export default function Feed() {
  const [feed, setFeed] = useState([]);
  const [loggedUser, setLoggedUser] = useState([]);

  async function handleLikePost(id) {
    try {
      await api.post(`/posts/${id}/like`);
    } catch (error) {
      console.log(error);
    }
  }

  async function handleDeletePost(id) {
    try {
      const response = await api.delete(`/posts/${id}`);

      setFeed(prevFeed => {
        return prevFeed.filter(post => post.id !== id)
      })
      toast.info(response.data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }

  const registerToSocket = useCallback(() => {
    const socket = io('http://localhost:3333');

    socket.on('post', newPost => {
      setFeed(prevFeed => {
        return [newPost, ...prevFeed]
      })
    })

    socket.on('like', likedPost => {
      setFeed(prevFeed => {
        return prevFeed.map(post => post.id === likedPost.id ? likedPost : post)
      })
    })
  }, []);

  useEffect(() => {
    api.get('/posts').then(response => {
      setFeed(response.data.feed);
      setLoggedUser(response.data.user);
    });

    registerToSocket();
  }, [registerToSocket]);

  return (
    <>
      <Header />

      <FeedContainer>
        {feed.map(post => (
          <Post key={post.id}>

            <PostHeader>
              <div className="post-info">
                <div className="avatar">
                  <Link to='/'>
                    <img src={`${process.env.REACT_APP_API_URL}/static/images/avatar/${post.user.avatar}`} alt="Imagem" />
                  </Link>
                </div>
                <div className="username-place">
                  <span className="username">{post.user.username}</span>
                  {post.place &&
                    <span className="place">{post.place}</span>
                  }
                </div>
              </div>
              <div className="actions">
                {loggedUser.id === post.user.id &&
                  <>
                    <Link to={
                      {
                        pathname: '/edit_post',
                        state: {
                          id: post.id
                        }
                      }
                    }>
                      <FiEdit size={18} color="#0095f6" />
                    </Link>
                    <button onClick={() => handleDeletePost(post.id)}>
                      <FiTrash2 size={18} color="#e74c3c" />
                    </button>
                  </>
                }
                <FiMoreHorizontal size={22} color="#000" />
              </div>
            </PostHeader>

            <img src={`${process.env.REACT_APP_API_URL}/static/images/post/${post.image}`} alt="Imagem" />

            <PostFooter>
              <div className="actions">
                <div>
                  <button onClick={() => handleLikePost(post.id)}>
                    {post.likes > 0 ? <IoMdHeart size={28} color="#ED4956" /> : <IoMdHeartEmpty size={28} color="#000" />}
                  </button>
                  <img src={comment} alt="" />
                  <img src={send} alt="" />
                </div>
                <div>
                  <img src={bookmark} alt="" />
                </div>
              </div>
              <strong>{post.likes} {post.likes === 1 ? 'curtida' : 'curtidas'}</strong>
              <p>
                <strong>{post.user.username}</strong> {post.description}
                <span>{post.hashtags}</span>
              </p>
            </PostFooter>

            <PostComments>
              <form action="">
                <textarea placeholder="Adicione um comentário..." />
                <button type="button">Publicar</button>
              </form>
            </PostComments>

          </Post>
        ))}
      </FeedContainer>
    </>
  );
}
