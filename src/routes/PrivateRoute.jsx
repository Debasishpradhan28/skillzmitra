// import { Navigate } from 'react-router-dom';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import { auth } from '../../firebase'; // adjust the path based on your file structure

// const PrivateRoute = ({ children }) => {
//   const [user, loading] = useAuthState(auth);

//   if (loading) return <div>Loading...</div>;
//   if (!user) return <Navigate to="/login" replace />;

//   return children;
// };

// export default PrivateRoute;

// src/routes/PrivateRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase'; // adjust path if firebase file is elsewhere

const PrivateRoute = ({ children }) => {
  const [user, loading] = useAuthState(auth);

  if (loading) return <div className="text-center p-4">Loading...</div>;

  return user ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
