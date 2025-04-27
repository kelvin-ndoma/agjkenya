import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Awards from './pages/Awards'
import Contact from './pages/Contact'
import Gallery from './pages/Gallery'
import Programs from './pages/Programs'
import Blogs from './pages/Blogs'
import AdvocacyCampaigns from './pages/AdvocacyCampaigns'
import CapacityBuilding from './pages/CapacityBuilding'

const AppRouter = () => {
  return (
    <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/about' element = {<About/>}/>
        <Route path='/awards' element = {<Awards/>}/>
        <Route path='/gallery' element = {<Gallery/>}/>
        <Route path='/programs' element = {<Programs/>}/>
        <Route path='/contact' element = {<Contact/>}/>
        <Route path='/blogs' element = {<Blogs/>}/>
        <Route path='/advocacy-campaigns' element = {<AdvocacyCampaigns/>}/>
        <Route path='/capacity-building' element = {<CapacityBuilding/>}/>


    </Routes>
  )
}

export default AppRouter