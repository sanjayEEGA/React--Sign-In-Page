import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
//import { FaLock } from 'react-icons/fa';

import { TextField } from '@mui/material';
import './SignInpage.css'

const styles = ({
  card:{
    maxWidth: 345 , 
     textAlign:"center"
   
  },
  

});
export default function SignInPage() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = (event) => {
   
    event.preventDefault();
    console.log(username, password);
    
  };
  
  return ( <div>
    <Card style={styles.card}>
       
    
          <label className='icon-container' >
              <div className='icon-round-shape'>

                  <Typography  >
              <svg className='logo-item'  viewBox="0 0 24 24" aria-hidden="true">
               <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"/>
            </svg>
                   </Typography>
             
              </div>
          </label>

         
      <CardContent>
                <Typography gutterBottom >
                Sign in
                </Typography>
                <div    color="text.secondary">
                
                <TextField id="username-basic" style={{width:"100%"}}  
                 type="text"
                name="username"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                label="username*" variant="standard" />
              
                <TextField id="passwords-basic"  type="password" name="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)} style={{width:"100%"}}  label="password*" variant="standard" />
              
                
                </div>
      </CardContent>
              <CardActions style={{justifyContent: 'center'}}>
            
              <Button variant="contained" className='button-signIn' size='large' onClick={handleSubmit} >Sign in</Button>
              
              </CardActions>
     
      
    </Card> </div>
  );
}

