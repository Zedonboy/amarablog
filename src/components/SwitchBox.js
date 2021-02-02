import React from 'react'
import "./Switchbox.css"
const SwitchBox = ({onChange}) => (
    <label className="switch">
        <input onChange={ onChange || (e => {})} type="checkbox"/>
        <span className="slider round"></span>
    </label>
)

export default SwitchBox