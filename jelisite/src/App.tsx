import Home from './Pages/HomePage/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TestPage from './Pages/TestPage/TestPage';

const  App = () =>
{
  return (
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/test" element={<TestPage/>}/>
      </Routes>
  );
}

export default App;