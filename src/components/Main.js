import React from 'react'
import { useSelector } from 'react-redux';
import Button from './Button';
import UserCard from './UserCard'
import './main.css'

function Main() {
     
  const currentUser = useSelector(state => state.currentUser);
  const total = useSelector(state => state.total);
  let size = Object.keys(currentUser).length;

  return (
    <div className="main">
       <div >
         {size > 0 ? (<UserCard user = {currentUser}/>) : (<h1 >Click on any button to view Details</h1>)} 
       </div> 
       {
         [...Array(total)].map((x, i) => {
           return <Button key = {i + 1} value={i + 1}/>
         })
       }
    </div>
  )
}

export default Main