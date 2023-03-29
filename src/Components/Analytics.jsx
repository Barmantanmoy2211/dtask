import React from 'react'
import { analytics } from '../Data/dummy'
import {onephone} from "../Images"
import "../Styles/analytics.scss"

const Analytics = () => {
  return (
    <div className='app__analytics'>
      <div className="analytics__container">
        <div className="left__analytics">
            <div className="left__text">
                <h1>Okay, let's see D'task in numbers</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, mollitia. Excepturi, nam eius omnis soluta nostrum ipsum eos libero consequuntur obcaecati illo, eveniet ea sunt sequi est possimus perferendis nihil alias laboriosam odio. Ex.</p>
            </div>
            <div className="left__analytics__container">
                {analytics.map((analytic, index) =>(
                        <div className="analytic__container" key={index}>
                            <div className="analytics__icon">
                                {analytic.desc}
                            </div>
                            <p>
                                {analytic.name}
                            </p>
                        </div>
                    ))
                }
            </div>
        </div>
        <div className="right__analytics">
          <img src={onephone} alt="" draggable={false} />
        </div>
      </div>
    </div>
  )
}

export default Analytics
