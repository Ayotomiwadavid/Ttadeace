import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Pagenotfound from './Pages/Pagenotfound';
import SignUp from './Pages/SignUp';
import Dashboard from './Pages/Dashboard';
import Deposit from './Pages/Deposit';


function App() {
  return (
    <main className='bg-white'>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/sign/:status' element={<SignUp />} />
      <Route path='/:user/dashboard' element={<Dashboard />}/>
      <Route path='/:user/deposit' element={<Deposit />}/>
      <Route path='*' element={<Pagenotfound />} />
    </Routes>
    </main>
  );
}

export default App;