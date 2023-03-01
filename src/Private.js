import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';


const Private = () => {
    const getResponse = JSON.parse(localStorage.getItem('serverResponse'))

  return (
    <>
    {!getResponse ? <Navigate to='/' /> :  <Outlet />}
    </>
  );
};

export default Private;
