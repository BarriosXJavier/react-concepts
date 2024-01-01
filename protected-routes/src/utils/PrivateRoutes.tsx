import { Outlet, Navigate } from "react-router-dom";
import React from "react";


//Auth is set up initially as false so only the Login page is accessible

const PrivateRoutes: React.FC = () => {
  let auth: {'token': boolean} =  {'token': false}
  return(
    auth.token ? <Outlet /> : <Navigate to='/Login'/>
  )
}

export default PrivateRoutes;
