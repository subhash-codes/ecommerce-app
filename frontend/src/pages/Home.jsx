import React from 'react'
<<<<<<< HEAD

const Home = () => {
  return (
    <div>
      
    </div>
=======
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'

const Home = () => {
  return (
    <>
      <Hero/>
      <LatestCollection />
      <BestSeller />
    </>
>>>>>>> 22643e8afa940b60f29613b014417e2ac6e2c3c7
  )
}

export default Home