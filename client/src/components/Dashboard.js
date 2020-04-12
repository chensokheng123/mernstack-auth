import React, { useContext } from 'react';
import AuthApi from '../utils/AuthApi';

export default function Dashboard() {
  const authApi = useContext(AuthApi);

  const handleSignout = () => {
    authApi.setAuth(false);
  };
  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={handleSignout}>Logout</button>
    </div>
  );
}
