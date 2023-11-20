import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";

import { useAuth } from '../../hooks/useAuth';


import { Button, Grid, TextField } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import EmailIcon from '@mui/icons-material/Email';


import { auth } from '../../services/user-services';
import { register } from '../../services/user-services';




function Register() {

  const { setAuth } = useAuth();
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [email, setEmail] = useState('');

  const passMatch = () => {
    return password === password2;
  }

  const handleSubmit = async e => {
    e.preventDefault();
    if (passMatch()) {
      const regData = await register({ username, email, password, profile: { is_premium: false } });
      if (regData) {
        console.log(regData)
        const data = await auth({ username, password });
        setAuth(data);
        toast.success("successful register")
        navigate('/account')
      }
    } else {
      // console.log('pass dont match');
      toast.error("pass dont match")
    }
  }

  return (
    <div>
      <Link to={'/'}>Back</Link>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <AccountCircleIcon />
          </Grid>
          <Grid item>
            <TextField id="input-with-icon-grid" label="Username"
              onChange={e => setUsername(e.target.value)}
            />
          </Grid>
        </Grid>
        <br />
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <VpnKeyIcon />
          </Grid>
          <Grid item>
            <TextField id="input-with-icon-grid" label="Password" type="password"
              onChange={e => setPassword(e.target.value)}
            />
          </Grid>
        </Grid>
        <br />
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <VpnKeyIcon />
          </Grid>
          <Grid item>
            <TextField id="input-with-icon-grid" label="Repeat password" type="password"
              onChange={e => setPassword2(e.target.value)}
            />
          </Grid>
        </Grid>
        <br />
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <EmailIcon />
          </Grid>
          <Grid item>
            <TextField id="input-with-icon-grid" label="Email"
              onChange={e => setEmail(e.target.value)}
            />
          </Grid>
        </Grid>
        <br />
        <Button color="primary" variant="contained" type='submit'>
          Register
        </Button>
        <br />
      </form>
    </div>
  );
}

export default Register;