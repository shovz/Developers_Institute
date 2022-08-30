import {Routes,Route,useNavigate} from 'react-router-dom';
import NavBar from './Components/Elements/NavBar';
import DashBoard from './Components/Pages/DashBoard';
import LoginRegister from './Components/Pages/LoginRegister';



function App() {
  return (
    <div >
      <NavBar/>
      <Routes>
        <Route path='/' element={<DashBoard/>}/>
        <Route path='/register' element={<LoginRegister title="Register"/>}/>
        <Route path='/SignIn' element={<LoginRegister title="Sign In"/>}/>
      </Routes>
    </div>
  );
}

export default App;

