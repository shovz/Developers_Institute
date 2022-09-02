import {Routes,Route} from 'react-router-dom';
import {connect} from 'react-redux';
import NavBar from './Components/Elements/NavBar';
import DashBoard from './Components/Pages/DashBoard';
import LoginRegister from './Components/Pages/LoginRegister';
import JobApplicationInfo from './Components/Pages/JobApplicationInfo';
import Landing from './Components/Pages/Landing';
import Profile from './Components/Pages/Profile';
import Analytics from './Components/Pages/Analytics';
import {Auth} from './Components/Authentication/Auth'


function App(props) {
  // console.log(props.jobTitle);
  return (
    <div >
      <NavBar/>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/dashBoard' element={<Auth><DashBoard/></Auth>}/>
        <Route path='/profile' element={<Auth><Profile/></Auth>}/>
        <Route path='/analytics' element={<Auth><Analytics/></Auth>}/>
        <Route path={`/jobInfo/${props.jobTitle}`} element={<Auth><JobApplicationInfo title={props.jobTitle}/></Auth>}/>
        <Route path='/register' element={<LoginRegister title="Register"/>}/>
        <Route path='/signIn' element={<LoginRegister title="Sign In"/>}/>
      </Routes>
    </div>
  );
}

const mapStateToProps=(state)=>{
  return {
    jobTitle  : state.jobTitle 
  }
}


export default  connect(mapStateToProps)(App);

