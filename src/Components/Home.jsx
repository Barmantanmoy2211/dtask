import React from 'react'
import "../Styles/home.scss"
import {TiTick} from "react-icons/ti"

const Home = () => {
  return (
    <div className='app__home'>
      <div className="home__text">
        <h1>Make your Business</h1>
        <h1>More Powerfull</h1>
      </div>
      <div className="ticks__container">
        <p>
            <span>
                <TiTick />
            </span>
            LifeTime Support
        </p>
        <p>
            <span>
                <TiTick />
            </span>
            No NCC Register
        </p>
      </div>
      <div className="input__container">
        <input type="text" placeholder='Input your email' />
        <button>Try for free</button>
      </div>
    </div>
  )
}

export default Home
