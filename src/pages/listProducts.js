import React, { Component } from 'react'
import api from '../services/api'
import './style.css'

class listProducts extends Component {
  state = {
    lista: [],
  }

  async componentDidMount() {
    const response = await api.get('/')

    this.setState({ lista: response.data })
  }

  render() {
    return (
      <div className="new-incident-container">
        <div className="content">
          <section id="post-list">
            {this.state.lista.map((post) => (
              <article key={post._id}>
                <header>
                  <div className="user-info">
                    <span>
                      <strong>Titulo: </strong>
                      {post.title}
                    </span>
                    <br></br>
                    <span className="place">
                      <strong> Descrição: </strong>
                      {post.description}
                    </span>
                    <br></br>
                    <span>
                      {' '}
                      <strong> Price: </strong>
                      {post.price}
                    </span>
                    <br></br>
                    <br></br>
                  </div>
                </header>
              </article>
            ))}
          </section>
        </div>
      </div>
    )
  }
}

export default listProducts
