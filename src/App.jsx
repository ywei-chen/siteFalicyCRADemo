import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/Navbar';
import Userregister from './pages/userregister';
import Ownerregister from './pages/ownerregister';
import Home from './pages/home';
import Ownerpage from './pages/ownerpage';
import Userpage from './pages/userpage';
import Courtpage from './pages/courtpage';
//Render
function App() {
  return (
    <>
      <NavBar></NavBar>
      <Routes>
        <Route path='/siteFalicyCRADemo/' element={<Home />} />
        <Route path='/siteFalicyCRADemo/userregister/' element={<Userregister />} />
        <Route path='/siteFalicyCRADemo/ownerregister/' element={<Ownerregister />} />
        <Route path='/siteFalicyCRADemo/ownerpage/:uid' element={<Ownerpage />} />
        <Route path='/siteFalicyCRADemo/userpage/:uid' element={<Userpage />} />
        <Route path='/siteFalicyCRADemo/courtpage/:uid' element={<Courtpage />} />
      </Routes>
    </>
  )
}

export default App
