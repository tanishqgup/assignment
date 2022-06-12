import React from 'react'
import { useSelector } from 'react-redux';
import { useState } from 'react';
import Button from './Button';
import UserCard from './UserCard';
import EmptyCard from './EmptyCard';
import './main.css'

function Main() {
     
  const currentUser = useSelector(state => state.currentUser);
  const total = useSelector(state => state.total);
  let size = Object.keys(currentUser).length;
  const [loading, setLoading] = useState(false);

  return (
    <div className="main">
       <div >
          {size ? (<UserCard user = {currentUser} loading = {loading}/>) : (<EmptyCard />)} 
       </div> 
       {
         [...Array(total)].map((x, i) => {
           return <Button key = {i + 1} value={i + 1} setLoading = {setLoading}/>
         })
       }
    </div>
  )
}

export default Main