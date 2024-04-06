import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Pagenotfound from './Pages/Pagenotfound';
import SignUp from './Pages/SignUp';
import Dashboard from './Pages/Dashboard';
import Deposit from './Pages/Deposit';
import Confirmdeposit from './Pages/Confirmdeposit';


function App() {
  return (
    <main>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/sign/:status' element={<SignUp />} />
      <Route path='/dashboard' element={<Dashboard />}/>
      <Route path='/deposit/:user' element={<Deposit />}/>
      <Route path='/deposit/confirm' element={<Confirmdeposit />}/>
      <Route path='*' element={<Pagenotfound />}/>
    </Routes>
    </main>
  );
}

export default App;