import {useEffect,useState} from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';


export const Auth = (props) =>{
    const[redirect,setRedirect] = useState(null);
    const navigate = useNavigate();

    useEffect(()=>{
      const verify = async()=>{
        try{
          let response = await axios.get('/verify',{
            withCredentials:true,
            headers:{
              'Content-Type':'application/json'
            }
          });
          console.log(response);
          if(response.status === 200){
            setRedirect(true)
          }
        }
        catch(e){
          navigate('/')
        }
      }
      verify();
    },[])

    return (
      redirect ? props.children : <h1>Session Expired</h1>
    )
}

