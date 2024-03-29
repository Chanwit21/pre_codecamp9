import { Button } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import localStorageService from '../../services/localStorageService';

export default function Profile(props) {
  const logout = () => {
    localStorageService.removeToken();
    props.setRole('guest');
  };
  return (
    <div>
      <h2>Profile Page</h2>
      <p>
        <strong>Name:</strong> Sonter
        <br />
        <strong>User ID:</strong> 15
      </p>
      <Link to='/todo'>
        <Button>Go to Todo List</Button>
      </Link>
      <br />
      <br />
      <Button onClick={logout}>Logout</Button>
    </div>
  );
}
