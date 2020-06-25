import React, { useState } from 'react'
import Image from '../assets/imagem_1.jpeg'
import api from '../services/api'
import './style.css'

function Home() {
  const [image, setImage] = useState('')
  const [title, setTitle] = useState('')
  const [price, setPrice] = useState('')
  const [description, setDescription] = useState('')

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
        <div align="center">
          {' '}
          <section>
            <img src={Image} alt="logo" className="img-um" />

            <h1>Cadastrar novo Produto</h1>
            <br />
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
    </div>
  )
}

export default Home
