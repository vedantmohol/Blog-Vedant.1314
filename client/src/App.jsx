import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Dashboard from './pages/Dashboard';
import Signin from './pages/Signin';
import SignUp from './pages/SignUp';
import Projects from './pages/Projects';
import Header from './Components/Header';
import Footer from './Components/Footer';

export default function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path='about' element={<About/>}/>
      <Route path="/dashboard" element={<Dashboard />}/>
      <Route path="/sign-in" element={<Signin />}/>
      <Route path="/sign-up" element={<SignUp />}/>
      <Route path="/projects" element={<Projects />}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}
