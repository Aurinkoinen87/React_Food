import React from 'react'
import { useSelector } from 'react-redux'
import Added from './Added'
import CleanCartMsg from "./CleanCartMsg"




export default function Messages() {

  const { addedMsg, cleanMsg } = useSelector((state)=> state.messages)

  return (
    <>    
    {addedMsg && <Added/>}
    {cleanMsg && <CleanCartMsg />}
    </>
  )
}
