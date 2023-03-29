import React from 'react'
import {feature} from "../Images"
import {features} from "../Data/dummy"
import {TiTick} from "react-icons/ti"
import "../Styles/feature.scss"
import Control from './Control'

const Features = () => {
  return (
    <div className='app__feature'>
      <div className="feature__container">
        <div className="left__feature">
          <img src={feature} alt="" draggable={false}/>
        </div>
        <div className="right__feature">
          <div className="right__text">
            <h1>Feature to help <br/>team succeed</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut similique nihil tempora repellendus, omnis autem, culpa, sunt incidunt quisquam rerum corporis laborum iste natus quis id! Quisquam nobis earum minima iure quas quidem numquam!
            </p>
          </div>
          <div className="feature__content">
            {
              features.map((feature, index) =>(
                <div className="feature" key={index}>
                  <TiTick/>
                  <div className="feature__text">
                    <p>{feature}</p>
                    <span>
                      Lorem, ipsum dolor sit amet consectetur adipisicing.
                    </span>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
      <Control />
    </div>
  )
}

export default Features
