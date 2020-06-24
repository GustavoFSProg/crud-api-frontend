import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Image from '../assets/imagem_1.jpeg'
import api from '../services/api'
import './style.css'

function Home() {
  const [image, setImage] = useState('')
  const [title, setTitle] = useState('Titulo do Produto')
  const [price, setPrice] = useState('20500')
  const [description, setDescription] = useState('Descrição 1')

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const data = new FormData()

      data.append('image', image)
      data.append('title', title)
      data.append('description', description)
      data.append('price', price)

      await api.post('/', data)

      window.location.reload('/')
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error)
    }
  }
  return (
    <div className="new-incident-container">
      <div className="content">
        <Link to="/list"> Link do Produtos</Link>

        <section>
          <img src={Image} alt="logo" className="img" />

          <h1>Cadastrar novo Produto</h1>
        </section>
        <form id="new-post" onSubmit={handleSubmit}>
          <input
            type="file"
            name="imagem"
            onChange={(e) => setImage(e.target.files[0])}
            placeholder="Digite a imagem"
          />
          <input
            type="text"
            value={title}
            name="title"
            placeholder="Digite o titulo"
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            value={description}
            name="description"
            placeholder="Digite a descrição"
            onChange={(e) => setDescription(e.target.value)}
          />

          <input
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            name="price"
            placeholder="Digite o preço"
          />

          <input type="submit" className="button" value="Cadastrar" />
        </form>
      </div>
    </div>
  )
}

export default Home
