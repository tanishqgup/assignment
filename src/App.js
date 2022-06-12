import React, { useState, useEffect } from 'react'
import Main from './components/Main';
import { addTotal } from './redux/actions'
import { useDispatch } from 'react-redux'
import ClipLoader from "react-spinners/ClipLoader";
import axios from 'axios';
import './App.css';

function App() {

  const dispatch = useDispatch()
  const [loading, setloading] = useState(true);

  function fetchUserData() {
    axios.get("https://reqres.in/api/users")
    .then((res) => {
      dispatch(addTotal(res.data.total));
      setloading(false);
    })
    .catch((err) => {
      console.log(err)
    })
  }

  useEffect(() =>{
    fetchUserData();
  });

  return (
    <div className="app">
      <h1>Assignment By Tanishq</h1>
      {!loading && <Main />}
      <ClipLoader loading = {loading} size = {50} />
    </div>
  );
}

export default App;
