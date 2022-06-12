import React from 'react'
import axios from 'axios'
import {useDispatch} from 'react-redux';
import {getCurrentUser} from '../redux/actions'

function Button({value}) {
  const dispatch = useDispatch()
   
  async function getUser(id) {
      const response = await axios.get(`https://reqres.in/api/users/${id}`)
      dispatch(getCurrentUser(response.data.data))
  }

  return (
    <button style={{marginRight:"10px"}} onClick={() => getUser(value)}>{value}</button>
  )
}

export default Button