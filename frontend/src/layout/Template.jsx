import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header'
import Messages from '../components/messages/Messages'


function Template() {


  return (
<div class="wrapper">
    <Header />
<main class="main">
<Messages />

<Outlet />
</main>

</div>
  )
}

export default Template