import React from 'react'
import { Link } from "react-router-dom"
import ItemChoice from "./ItemChoice"





export function Pizza(props) {



return (
    <div class="pizza">
      <div className="pizza-img-desc">
    <Link to={`item/${props.id}`} >
      <div className="pizza__pic">
        <div className="pizza__hidden">
          Read info...
        </div>
      <img class="pizza-img" src={props.imageUrl} alt="menu__pizza"/>
      </div>
    </Link>
    <h3 class="pizza__title">{props.title}</h3>
    </div>
    <ItemChoice {...props} />

  </div>
  )
} 