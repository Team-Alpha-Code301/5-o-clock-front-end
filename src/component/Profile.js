import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    
    isAuthenticated && (
      
      <div>
        <Header />
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <Footer />
      </div>
    )
  );
};

export default Profile;
