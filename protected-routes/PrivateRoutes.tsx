import { Outlet, Navigate } from "react-router-dom";  

const PrivateRoutes = () => {
  let auth: {'token': boolean} = {'token': false}
  
  return(
    auth.token ? <Outlet /> : <Navigate to="/Login"/>
  )
}

export default PrivateRoutes;
