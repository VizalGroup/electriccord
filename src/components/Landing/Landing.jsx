import React from 'react'
import Slider from '../Slider/Slider'
import MainLanding from '../MainLanding/MainLanding'
import Banner from '../Banner/Banner'


export default function Landing() {
  return (
    <div>
        <Slider />
        <br />
        <MainLanding/>
        <Banner/>
        <div style={{marginBottom: "10vh"}}></div>
    </div>
  )
}
