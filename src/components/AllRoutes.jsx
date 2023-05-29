import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import FriendRefer from './FriendRefer'

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/friendrefer" element={<FriendRefer />} />
      </Routes>
    </>
  )
}

export default AllRoutes