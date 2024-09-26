import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Dashboard from './pages/Dashboard';
import Signin from './pages/Signin';
import SignUp from './pages/SignUp';
import Projects from './pages/Projects';
import Header from './Components/Header';
import Footer from './Components/Footer';
import PrivateRoute from './Components/PrivateRoute';
import OnlyAdminPrivateRoute from './Components/OnlyAdminPrivateRoute';
import CreatePost from './pages/CreatePost';

export default function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path='about' element={<About/>}/>
      <Route element={<PrivateRoute/>}>
      <Route path="/dashboard" element={<Dashboard />}/>      
      </Route>
      <Route path="/sign-in" element={<Signin />}/>
      <Route path="/sign-up" element={<SignUp />}/>
      <Route path="/projects" element={<Projects />}/>
      <Route element={<OnlyAdminPrivateRoute/>}>
      <Route path="/create-post" element={<CreatePost />}/>      
      </Route>
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}
