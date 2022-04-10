import Layout from './layouts/Layout'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Portfolio from './pages/Portfolio'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import LoginRegister from './pages/LoginRegister'
import Login from './components/Login'
import Register from './components/Register'
import './assets/css/style.css';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='portfolio' element={<Portfolio/>}/>
        <Route path='logReg' element={<LoginRegister/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='register' element={<Register/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
