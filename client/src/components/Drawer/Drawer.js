import React, { useState } from "react"
import { Link } from "react-router-dom"
import properties from "./Drawer.module.css"

const Drawer = (props)=>{
  const open = props.open
  const handleClose = props.handleClose

  return <div className={`${properties.root} ${open?properties.open:null}`}>
    <div className={properties.close_button}>
      <p onClick={handleClose} >Close</p>
    </div>
    <h3 className={properties.heading}>NKR <span>2K21</span></h3>
    <ul className={properties.links}>
      <li onClick={handleClose}>
      <Link to="/">
        Home
      </Link>
      </li>
      <li onClick={handleClose}>
      <Link to="/About">
        About us
      </Link>
      </li>
    </ul>

    <div className={properties.bottom_content}>
      <p >Made with 🤚 by NITKR team</p>
    </div>
  </div>
}

export default Drawer