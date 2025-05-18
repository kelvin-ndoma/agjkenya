import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Awards from './pages/Highlights'
import Contact from './pages/Contact'
import Gallery from './pages/Gallery'
import Blogs from './pages/Blogs'
import AdvocacyCampaigns from './pages/AdvocacyCampaigns'
import CapacityBuilding from './pages/CapacityBuilding'
import Team from './pages/About'

const AppRouter = () => {
  return (
    <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/about' element = {<Team/>}/>
        <Route path='/highlights' element = {<Awards/>}/>
        <Route path='/gallery' element = {<Gallery/>}/>
        <Route path='/contact' element = {<Contact/>}/>
        <Route path='/blogs' element = {<Blogs/>}/>
        <Route path='/advocacy-campaigns' element = {<AdvocacyCampaigns/>}/>
        <Route path='/capacity-building' element = {<CapacityBuilding/>}/>
    </Routes>
  )
}

export default AppRouter