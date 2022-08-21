// import Button from '@mui/material/Button';
import {Routes,Route} from 'react-router-dom'
import Home from './Components/Home';
import Favorites from './Components/Favorites';
import Navbar from './Components/Navbar';
import Search from './Components/Search';

function App() {
  return (
    <div>
      <Navbar/>
      <Search/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Favorites' element={<Favorites/>}/>
      </Routes>
    </div>
  );
}

export default App;
