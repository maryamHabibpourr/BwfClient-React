import React, { useState } from 'react';


import { Button, Grid, TextField } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import VpnKeyIcon from '@mui/icons-material/VpnKey';

import { auth } from "../../services/user-services"
import { useAuth } from '../../hooks/useAuth';
import { Link, useNavigate } from 'react-router-dom';
import User from '../user/user';
import { toast } from "react-toastify";



function Sidebar() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { authData, setAuth } = useAuth();
  const navigate = useNavigate()


  const handleSubmit = async e => {
    e.preventDefault();
    const data = await auth({ username, password });
    if (data) {
      console.log(data);
      setAuth(data);
      toast.success("successful login")
    }
    else {
      toast.error("something went wrong")
    }
  }
  // console.log("authData:",authData)


  const logout = () => {
    setAuth(null);
    toast.success("logout")
  }
  const account = () => {
    navigate('/account')
  }


  return (
    <div className="sidebar">
      {!authData ?
        <div>
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
            <Button color="primary" variant="contained" type='submit'>
              Login
            </Button>
            <br />

          </form>
          <br />
          <Link to={'/register'} style={{ textDecoration: "underline" }}>Register here if you don't have an account yet</Link>
        </div>
        :
        <div>
          <User user={authData.user} />
          <br />
          <br />
          <div style={{display:"flex", flexDirection:"row", gap:"2px"}}>
            <Button sx={{width:"100px"}} color="primary" variant="contained" onClick={() => logout()}>
              Logout
            </Button>
            <Button sx={{width:"100px"}} color="primary" variant="contained" onClick={() => account()}>
              My Account
            </Button>
          </div>
        </div>
      }
    </div>
  );
}

export default Sidebar;