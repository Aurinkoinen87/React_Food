import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from "react-router-dom";
import { dataSelector } from '../redux/slices/dataSlice'
import { Preloader } from '../components/Preloader'

function Item() {

  const { id } = useParams()
  const [item, setItem] = useState(null)
  let { data } = useSelector(dataSelector)

  useEffect(()=> {
    const obj = data.find(el=> el.id == id)
    setItem(obj)
  },[id])
  

  if(!item) return <Preloader/>

  return (
    <div>{item.id}</div>
  )
}

export default Item