import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Pagenotfound from './Pages/Pagenotfound';
import SignUp from './Pages/SignUp';
import SignIn from './Pages/SignIn';


function App() {
  return (
    <main className='bg-overallBg'>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/signup' element={<SignUp />} />
      <Route path='/signin' element={<SignIn />} />
      <Route path='*' element={<Pagenotfound />} />
    </Routes>
    </main>
  );
}

export default App;