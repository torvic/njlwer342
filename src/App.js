import React, { Component } from 'react'

/// Modifica el componente para que se puedan agregar tareas

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '',
      list: [],
    }
  }
  handleSubmit = (e) => {
    this.setState({ text: '', list: [...this.state.list, this.state.text] })
    e.preventDefault()
  }
  handleChange = (e) => {
    this.setState({ text: e.target.value })
  }
  render() {
    return (
      <div className='wrapper'>
        <div className='list'>
          <h3>Por hacer:</h3>
          <ul className='todo'>
            <li>Sacar la ropa</li>
            <li>Hacer la cama</li>
            <li>Leer un rato</li>
            {this.state.list &&
              this.state.list.map((el) => <li key={el}>{el}</li>)}
          </ul>
          <form onSubmit={this.handleSubmit}>
            <input
              type='text'
              id='new-task'
              onChange={this.handleChange}
              placeholder='Ingresa una tarea y oprime Enter'
              value={this.state.text}
            />
          </form>
        </div>
      </div>
    )
  }
}

export default App
