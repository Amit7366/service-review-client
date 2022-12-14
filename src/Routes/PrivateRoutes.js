import { Spinner } from 'flowbite-react';
import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';

const PrivateRoutes = ({children}) => {
    const {user,loader} = useContext(AuthContext);
    const location = useLocation();


    if(loader){
        return   <Spinner
        color="failure"
        aria-label="Failure spinner example"
      />
    }
    if(!user){
        return <Navigate to='/login' state={{from: location}} replace></Navigate>
    }

    return children;
};

export default PrivateRoutes;