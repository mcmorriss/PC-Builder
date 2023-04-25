import React from 'react'

const Header = ({user}) => {
  return (
    <div>
        <h1>PC Builders</h1>
        <p>Logged in as: <b>{user}</b></p>

    </div>
  )
}

export default Header