import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';

const PrivateRoute = ({children}) =>{
    const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
     <div className='min-h-screen flex items-center justify-center'>
        <span className="loading loading-ring loading-lg"></span>
     </div>
    );
  }

  if (user) {
    return children;
  }

  return <Navigate state={location.pathname} to="/login"></Navigate>;
};


export default PrivateRoute;