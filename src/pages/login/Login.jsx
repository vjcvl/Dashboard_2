import { Button, TextField,Box, Paper } from '@mui/material'
import React from 'react'
import './login.scss';
import img_url from '../../images/log__img.jpeg'
import {useNavigate} from 'react-router-dom';
const Login = () => {
  const navigate = useNavigate()
  return (
    <Paper style={{display : 'flex',flexDirection : 'row',margin : '75px',justifyContent : 'space-between',alignItems:'center'}}>
                  <div className='img'>
      <img src={img_url} style={{height: '500px',width : 'auto'}} alt="Login"/>
      </div>
        <div style={{display : 'flex',flexDirection : 'column',padding : '0px 200px 0px 0px'}}>
         <h2 style={{textAlign : 'center',color : 'lightslategray',fontSize : '25px',fontWeight : '900'}}>Sign in</h2>
         <hr/>
         <TextField sx={{width : '300px',margin : '20px 0px 10px 0px'}} type="text" label="User Name" size='small' fullWidth variant='outlined' required/>
         <TextField sx={{width : '300px',margin : '10px 0px 20px 0px'}} type="password" label="Password" size='small' fullWidth variant='outlined' required/>
         <Button onClick={()=>navigate('/')} sx={{marginLeft : 'auto',borderRadius : 5}} variant="contained">Sign in</Button>
      </div>

    </Paper>
  )
}

export default Login
