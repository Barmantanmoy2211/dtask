import React from 'react'
import "../Styles/control.scss"
import {controls} from "../Data/dummy"

const Control = () => {
  return (
    <div className='feature__controls'>
      <div className="control__container">
        <div className="control__text">
            <h1>Control in one place</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus, obcaecati. Quas illo temporibus veniam. Quae exercitationem itaque esse, laboriosam commodi perspiciatis minima, nesciunt ipsam numquam, expedita provident dolorum?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, obcaecati.
            </p>
            <button>Start 14 days trial</button>
        </div>
        <div className="control__content">
            {
                controls.map((control,index)=>(
                    <div className="control" key={index}>
                        <div className="control__icon">
                            
                        <control.icon />
                        </div>
                        <div className="control__text__content">
                            <p>
                                {control.name}
                            </p>
                            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio voluptates atque porro nostrum at quos culpa odio, in, iusto fuga, aliquid ipsum voluptatibus possimus!</span>
                        </div>
                    </div>
                ))
            }
        </div>
      </div>
    </div>
  )
}

export default Control
