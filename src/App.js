import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Pagenotfound from './Pages/Pagenotfound';
function App() {
  return (
    <main className='bg-overallBg'>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='*' element={<Pagenotfound />} />
    </Routes>
    </main>
  );
}

export default App;