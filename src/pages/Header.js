import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

export default function Header() {
  return (
    <>
      <div className="container">
        <div className="menu">
          <Link to="/list" className="linke">
            {' '}
            Produtos
          </Link>

          <Link to="/" className="linke-home">
            {' '}
            Home
          </Link>
        </div>
      </div>
    </>
  )
}
