import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Pagenotfound from './Pages/Pagenotfound';
import SignUp from './Pages/SignUp';
import Dashboard from './Pages/Dashboard';


function App() {
  return (
    <main className='bg-overallBg'>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/sign/:status' element={<SignUp />} />
      <Route path='*' element={<Pagenotfound />} />
      <Route path='/dashboard' replace element={<Dashboard />}/>
    </Routes>
    </main>
  );
}

export default App;