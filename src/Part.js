import React from 'react'
import "./Part.css"

function Part({name,context}) {
    return (
        <div className="part">
            <div className="part_top">
                <img width="100px" height="100px" src="https://images.vexels.com/media/users/3/218843/isolated/preview/a5897fc91c757ab85cc8533390c62589-gears-inside-lightbulb-stroke-icon.png" alt=""/>
                
            <p>{name}</p>
            <h4>Download</h4>
            </div>
            <p className="part_topp" >{context}</p>
            
        </div>
    )
}

export default Part
