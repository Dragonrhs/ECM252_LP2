import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import bootstrap from 'bootstrap/dist/js/bootstrap'
import '@fortawesome/fontawesome-free/css/all.min.css'
import Modal from './Modal'
class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      latitude: null,
      longitude: null,
      estacao: null,
      data: null,
      icone: null,
      mensagemDeErro: null
    }
  }

  icones = {
    'Outono': 'fa-brands fa-canadian-maple-leaf',
    'Primavera': 'fa-solid fa-clover',
    'Verão': 'fa-solid umbrella-beach',
    'Inverno': 'fa-regular fa-snowflake'
  }

  obterEstacao = (data, latitude) => {
    const anoAtual = data.getFullYear()
    //21/06 
    const d1 = new Date(anoAtual, 5, 21)
    //24/09
    const d2 = new Date(anoAtual, 8, 24)
    //22/12
    const d3 = new Date(anoAtual, 11, 22)
    //21/03
    const d4 = new Date(anoAtual, 2, 21)
    const estouNoSul = latitude < 0 
    if(data >= d1 && data < d2)
      return estouNoSul ? 'Inverno' : 'Verão'
    if(data >= d2 && data < d3)
      return estouNoSul ? 'Primavera' : 'Outono'
    if (data > d3 || data < d4)
      return estouNoSul ? 'Verão' : 'Inverno'
    return estouNoSul ? 'Outono' : 'Primavera'
  }

  // componentDidMount(){
  //   this.obterLocalizacao()
  // }

  obterLocalizacao = () => {
    //1 Obter a localização do usuário
    window.navigator.geolocation.getCurrentPosition(
      position => {
        //2 Obter a data atual do sistema
        const dataAtual = new Date()
        //3 Obter a estação climática do usuário
        const estacao = this.obterEstacao(dataAtual, position.coords.latitude)
        //4 Obter o nome do ícone
        const icone = this.icones[estacao]
        //5 Usar a função setState (qualifique com this) atualizando o estado da aplicação
        //entregue um objeto à função setState 
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          icone: icone,
          estacao: estacao,
          data: dataAtual
        })
      },
      err => {
        //não faça isso
        // this.state.mensagemDeErro = "Jovem usuário, permita o acesso à localização"
        //faça isso
        this.setState({
          mensagemDeErro: 'Jovem usuário, permita o acesso à localização'
        })
        const myModal = new bootstrap.Modal(document.getElementById('exampleModal'))
        myModal.show()
        
      }
  )

  }
  render(){
    return(
      <div
        className='container mt-2'>
        <div className='row justify-content-center'>
          <div className='col-sm-12 col-md-8'>
            <div className='card'>
              <div 
                className='card-body'>
                  <div 
                    className='d-flex align-items-center justify-content-center'>
                    <i className={`${this.state.icone} fa-5x`}></i>
                    <p className='w-75 ms-3 text-center fs-1'>{this.state.estacao}</p>
                  </div>
                  <p className='text-center'>
                    {
                      this.state.latitude ?
                      `Coordenadas: ${this.state.latitude}, ${this.state.longitude}. Data: ${this.state.data}` :
                      this.state.mensagemDeErro ?
                      `${this.state.mensagemDeErro}` :
                      `Clique no botão para saber a sua estação climática`  
                    }
                  </p>
                  <button
                    onClick={this.obterLocalizacao}
                    className='btn btn-outline-primary w-100 mt-2'>
                    Qual a minha estação?
                  </button>
                <Modal />
                <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">
                  Launch demo modal
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)