import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
function App() {
  return (
    <main className='bg-overallBg'>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='*' element={<h1>404 not found</h1>} />
    </Routes>
    </main>
  );
}

export default App;