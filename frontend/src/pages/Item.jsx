import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import { dataSelector } from '../redux/slices/dataSlice'
import { Preloader } from '../components/Preloader'
import BackBtn from '../components/BackBtn'
import ItemChoice from "../components/ItemChoice"

function Item() {

  const { id } = useParams()
  const [item, setItem] = useState(null)
  let { data } = useSelector(dataSelector)

  useEffect(()=> {
    const obj = data.find(el=> el.id == id)
    setItem(obj)
    console.log(obj)
  })
  

  if(!item) return <Preloader/>
  const { imageUrl, title } = item

  return (
    <div className='item-page'>
      <div className='item'>
      <img src={imageUrl} alt="item" />
      <h3>{title}</h3>
      <p>Состав: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga, reiciendis natus officia nam possimus voluptatibus voluptatem, corporis voluptas nobis voluptatum, magni incidunt est qui dignissimos vel iure molestias. Vitae, earum!</p>
      <div className="item-choice">
      <ItemChoice {...item} />
      </div>
      <BackBtn />
      </div>
    </div>
      
  )
}

export default Item