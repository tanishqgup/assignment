import React from 'react'
import './usercard.css'
import ClipLoader from "react-spinners/ClipLoader";

function UserCard({user, loading}) {
  return (
    <div className="usercard">
      {!loading && <div className="usercardfake">
        <div className="details">
            <h3> {`First Name : ${user.first_name}`}</h3>
            <h3>{`Last Name : ${user.last_name}`}</h3>
            <h3>{`Email     : ${user.email}`}</h3>
        </div>
        <div className="avatar">
          <img src={user.avatar} alt="" />
        </div>
      </div>
      }
      <ClipLoader loading = {loading} size = {50} />
    </div>
  )
}

export default UserCard