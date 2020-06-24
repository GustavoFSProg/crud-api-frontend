import React, { useState } from 'react'
import api from '../services/api'
import './style.css'

function ListProducts() {
  const [lista, setLista] = useState([])

  async function dataBase() {
    const response = await api.get('/')

    setLista(response.data)

    // eslint-disable-next-line no-console
    return lista
  }

  // eslint-disable-next-line no-unused-vars
  const stageing = dataBase()

  return (
    <div className="new-incident-container">
      <div className="content">
        <section id="product-list">
          {lista.map((product) => (
            // eslint-disable-next-line no-underscore-dangle
            <article key={product._id}>
              <header>
                <div className="user-info">
                  <span>
                    <strong>Titulo: </strong>
                    {product.title}
                  </span>
                  <br />
                  <span className="place">
                    <strong> Descrição: </strong>
                    {product.description}
                  </span>
                  <br />
                  <span>
                    <strong>Price: </strong>
                    {product.price}
                  </span>
                  <br />
                  <br />
                </div>
              </header>
            </article>
          ))}
        </section>
      </div>
    </div>
  )
}

export default ListProducts
