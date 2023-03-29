import React from 'react'
import "../Styles/distribution.scss"
import {IoLogoGooglePlaystore} from "react-icons/io5"
import {twophones} from "../Images"
import {BsApple} from "react-icons/bs"

const Distribution = () => {
  return (
    <div className='app__distribution'>
      <div className="distribution__container">
        <div className="left__distribution">
            <div className="distribution__text">
                <h1>D'task also works on your phone.</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat ullam nulla, explicabo neque ab quibusdam in, animi consectetur asperiores quia beatae necessitatibus debitis dolorem incidunt temporibus repellendus magnam eum eligendi?
                </p>
            </div>
            <div className="distribution__buttons">
                <button>
                    <BsApple />
                    Download App</button>
                    <button>
                        <IoLogoGooglePlaystore />
                        Download App
                    </button>
            </div>
        </div>
        <div className="right__distribution">
            <img src={twophones} alt="" draggable={false}/>
        </div>
      </div>
    </div>
  )
}

export default Distribution
