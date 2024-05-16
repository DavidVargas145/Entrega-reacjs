import React from 'react'
import { NavBar } from './NavBar'
import { Carrito } from './Carrito'

export const Header = () => {
  return (
    <header>
        <h1>GreenShop</h1>
        <NavBar/>
        <Carrito/>
    </header>
  )
}
