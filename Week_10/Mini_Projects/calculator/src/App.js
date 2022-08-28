import {Box,Grid} from '@mui/material';
import {useState} from 'react'



function App() {
  const [calc,setCalc] = useState('');
  const [ans,setAns] = useState('');
  const [op,setOp] = useState('');

  const calculate=(e)=>{
    
  }

      
  return (
    <Box sx={{
      margin:'40px auto',
      width: 600,
      height: 600,
      backgroundColor: 'black',
      textAlign:'end',
      // '&:hover': {
      //   backgroundColor: 'primary.main',
      //   opacity: [0.9, 0.8, 0.7],
      // },
    }}>
    <Box sx={{height:100,backgroundColor:'lightblue',
      margin:'30px 0', color:'black'}}>
        <h1>{ans}{op}</h1>
        <h1>{calc}</h1>

    </Box>
    <Box>
      <Grid container>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Box 
              onClick={()=>{
                setAns('');
                setCalc(' ');
                setOp('');
              }}
              sx={{height:80,width:'100%',backgroundColor:'lightgreen' }}>Ac</Box>
          </Grid>
          <Grid item xs={3}>
          <Box              
              onClick={()=>{
                setAns(calc);
                setCalc('')
                setOp('/')
              }}
              sx={{height:80,width:'100%',backgroundColor:'lightgreen' }}>/</Box>
          </Grid>
          <Grid item xs={3}>
          <Box 
              onClick={()=>{
                setAns(calc);
                setCalc('')
                setOp('X')
              }}
              sx={{height:80,width:'100%',backgroundColor:'lightgreen' }}>X</Box>
          </Grid>

          <Grid item xs={3}>
            <Box
              onClick={()=> setCalc(calc*10 + 7)}
              sx={{height:80,width:'100%',backgroundColor:'lightgreen' }}>7</Box>
          </Grid>
          <Grid item xs={3}>
          <Box 
              onClick={()=> setCalc(calc*10 + 8)}
              sx={{height:80,width:'100%',backgroundColor:'lightgreen' }}>8</Box>
          </Grid>
          <Grid item xs={3}>
          <Box 
              onClick={()=> setCalc(calc*10 + 9)}
              sx={{height:80,width:'100%',backgroundColor:'lightgreen' }}>9</Box>
          </Grid>
          <Grid item xs={3}>
          <Box 
              onClick={()=>{
                setAns(calc);
                setCalc('')
                setOp('-')
              }}
              sx={{height:80,width:'100%',backgroundColor:'lightgreen' }}>-</Box>
          </Grid>

          <Grid item xs={3}>
            <Box 
              onClick={()=> setCalc(calc*10 + 4)}
              sx={{height:80,width:'100%',backgroundColor:'lightgreen' }}>4</Box>
          </Grid>
          <Grid item xs={3}>
          <Box 
              onClick={()=> setCalc(calc*10 + 5)}
              sx={{height:80,width:'100%',backgroundColor:'lightgreen' }}>5</Box>
          </Grid>
          <Grid item xs={3}>
          <Box 
              onClick={()=> setCalc(calc*10 + 6)}
              sx={{height:80,width:'100%',backgroundColor:'lightgreen' }}>6</Box>
          </Grid>
          <Grid item xs={3}>
          <Box 
              onClick={()=>{
                setAns(calc);
                setCalc('')
                setOp('+')
              }}
              sx={{height:80,width:'100%',backgroundColor:'lightgreen' }}>+</Box>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={9} sx={{m:'10px 0'}} >
           <Grid container  spacing={2}>
            <Grid item  xs={4}>
                <Box onClick={()=> setCalc(calc*10 + 1)}
              sx={{height:80,width:'100%',backgroundColor:'lightgreen' }}>1</Box>
              </Grid>
              <Grid item xs={4}>
                <Box onClick={()=> setCalc(calc*10 + 2)}
              sx={{height:80,width:'100%',backgroundColor:'lightgreen' }}>2</Box>
              </Grid>
              <Grid item xs={4}>
                <Box onClick={()=> setCalc(calc*10 + 3)}
              sx={{height:80,width:'100%',backgroundColor:'lightgreen' }}>3</Box>
              </Grid>
              <Grid item xs={9}>
                <Box onClick={()=> setCalc(calc*10 )}
              sx={{height:80,width:'100%',backgroundColor:'lightgreen' }}>0</Box>
              </Grid>
              <Grid item xs={3}>
                <Box onClick={()=>{
                  setCalc(calc+'.')
                }}
              sx={{height:80,width:'100%',backgroundColor:'lightgreen' }}>.</Box>
              </Grid>
           </Grid>
          </Grid>
          <Grid item xs={3} sx={{mt:'10px'}}>
            <Grid container spacing={2}>
              <Grid item xs>
                <Box 
                   
                    sx={{height:175,width:'100%',backgroundColor:'lightgreen' }}>=</Box>
              </Grid>
          </Grid>
          </Grid>
        </Grid>

      </Grid>

    </Box>

  </Box>
  );
}

export default App;
