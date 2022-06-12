import React from 'react'
import axios from 'axios'
import {useDispatch} from 'react-redux';
import {getCurrentUser} from '../redux/actions'

function Button({value, setLoading}) {
  const dispatch = useDispatch()
   
  async function getUser(id) {
    setLoading(true);
    const response = await axios.get(`https://reqres.in/api/users/${id}`)
    dispatch(getCurrentUser(response.data.data))
    setLoading(false);
  }

  return (
    <button style={{marginRight:"10px"}} onClick={() => getUser(value)}>{value}</button>
  )
}

export default Button