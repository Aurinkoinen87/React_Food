import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header'

function Template() {
  return (
<div class="wrapper">
    <Header />
<main class="main">
  <Outlet />
</main>

</div>
  )
}

export default Template