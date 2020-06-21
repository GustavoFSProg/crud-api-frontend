import React, { Component } from 'react'
import { useHistory } from 'react-router-dom'
import Image from '../assets/imagem_1.jpeg'
import api from '../services/api'
import './style.css'

class Home extends Component {
  state = {
    image: null,
    title: '',
    price: '',
    description: '',
  }

  handleSubmit = async (e) => {
    e.preventDefault()

    const data = new FormData()

    data.append('image', this.state.image)
    data.append('title', this.state.title)
    data.append('description', this.state.description)
    data.append('price', this.state.price)

    await api.post('/', data)
  }

  handleImageChange = (e) => {
    this.setState({ image: e.target.files[0] })
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    return (
      <div className="new-incident-container">
        <div className="content">
          <section>
            <img src={Image} alt="logo" className="img" />

            <h1>Cadastrar novo Produto</h1>
          </section>
          <form id="new-post" onSubmit={this.handleSubmit}>
            <input
              type="file"
              name="imagem"
              onChange={this.handleImageChange}
              placeholder="Digite a imagem"
            ></input>
            <input
              type="text"
              name="titulo"
              value={this.state.titulo}
              placeholder="Digite o titulo"
              onChange={this.handleChange}
            ></input>
            <input
              type="text"
              value={this.state.description}
              name="description"
              placeholder="Digite a descrição"
              onChange={this.handleChange}
            ></input>

            <input
              type="text"
              value={this.state.price}
              onChange={this.handleChange}
              name="price"
              placeholder="Digite o preço"
            ></input>

            <input type="submit" className="button" value="Cadastrar"></input>
          </form>
        </div>
      </div>
    )
  }
}

export default Home
