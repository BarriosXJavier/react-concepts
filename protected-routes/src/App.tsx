import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Products from './pages/Products';
import PrivateRoutes from './utils/PrivateRoutes';

const App: React.FC = () => {
  return(
    <div>
      <Router>
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route element={<Home />} path='/' index/>
            <Route element={<Products />} path='/products'/>
          </Route>
          <Route element={<Login />} path='/login'/>
          <Route element={<Signup />} path='/signup'/>
       </Routes>
      </Router>
    </div>
  )
}

export default App
