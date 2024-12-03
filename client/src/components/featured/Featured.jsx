import './featured.css'

import React from 'react'

const Featured = () => {
  return (
    <div className="featured">
        <div className="featuredItems">
            <img src="https://images.unsplash.com/photo-1660145416818-b9a2b1a1f193?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fE11bWJhaXxlbnwwfHwwfHx8MA%3D%3D" alt="" className='featuredImg'/>
            <div className="featuredTitles">
                <h1>Mumbai</h1>
                <h2>923 properties</h2>
            </div>
        </div>
        <div className="featuredItems">
            <img src="https://plus.unsplash.com/premium_photo-1697730429201-381b71f61427?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8RGVsaGl8ZW58MHx8MHx8fDA%3D" alt="" className='featuredImg'/>
            <div className="featuredTitles">
                <h1>Delhi</h1>
                <h2>693 properties</h2>
            </div>
        </div>
        <div className="featuredItems">
            <img src="https://media.istockphoto.com/id/1021263736/photo/sarkhej-roza-ahmedabad.webp?a=1&b=1&s=612x612&w=0&k=20&c=ZW1eYUoVRrurE07Xk8NW5dwvjLmrhF6_tBlnzhWr0KI=" alt="" className='featuredImg'/>
            <div className="featuredTitles">
                <h1>Ahmedabad</h1>
                <h2>299 properties</h2>
            </div>
        </div>
    </div>
  )
}

export default Featured