import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header'
import Added from '../components/Added'
import { useSelector } from 'react-redux'

function Template() {

  const { addedMsg } = useSelector((state)=> state.messages)

  return (
<div class="wrapper">
    <Header />
<main class="main">
  {addedMsg && <Added/>}
  <Outlet />
</main>

</div>
  )
}

export default Template