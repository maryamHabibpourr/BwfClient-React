import React from 'react'
import GroupList from '../group/group-list'
import { Routes, Route } from 'react-router-dom';
import GroupDetails from '../group/group-details';
import Register from '../user/register';
import Account from '../user/account';
import Event from '../events/event';
import EventForm from '../events/event-form';




const Main = () => {

  return (
    <div style={{padding:"20px 70px"}}>
         {/* {authData &&  <p>{authData.user.username}</p> }  */}
        <Routes>
            <Route path="/" element={<GroupList />}/>
            <Route path="/details/:id" element={<GroupDetails/>}/>
            <Route path="/event/:id" element={ <Event />}/>
            <Route path="/event-form" element={ <EventForm />}/>
            <Route path="/register" element={ <Register/>}/>
            <Route path="/account" element={<Account/>}/>
        </Routes>
    
    </div>
  )
}

export default Main