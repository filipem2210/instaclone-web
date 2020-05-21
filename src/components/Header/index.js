import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import { HeaderContainer, HeaderContent } from './styles.js';

import logo from '../../assets/instagram-logo-small.png';
import camera from '../../assets/camera.svg';

export default function Header() {
  const [profileImage, setProfileImage] = useState(null);

  useEffect(() => {
    api.get('/me').then(response => {
      setProfileImage(response.data.avatar);
    });
  }, [])

  return (
    <HeaderContainer>
      <HeaderContent>
        <Link to="/" className="home-link">
          <img src={logo} alt="Instaclone logo" />
        </Link>
        <div className="actions">
          <Link to="/new_post">
            <img src={camera} alt="Novo post" />
          </Link>
          <Link to="/profile">
            <img
              src={`${process.env.REACT_APP_API_URL}/static/images/avatar/${profileImage ? profileImage : 'avatar.jpg'}`}
              alt="Profile img"
            />
          </Link>
        </div>
      </HeaderContent>
    </HeaderContainer>
  );
}
