import React from 'react'
import Header from '../../components/Header'
import Banner from '../../components/Banner'
import Footer from '../../components/Footer'
import ExclusiveList from '../ExclusiveList'
import Partner from '../Partner'
import CityList from '../CityList'
import Testimonial from '../Testimonial'

const Home = () => (
  <div>
    <Header />
    <Banner />
    <ExclusiveList />
    <Partner />
    <CityList />
    <Testimonial />
    <Footer />
  </div>
)

export default Home
