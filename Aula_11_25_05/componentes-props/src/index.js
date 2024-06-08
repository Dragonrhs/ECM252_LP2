import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import Pedido from './Pedido'
import Cartao from './Cartao'
import Feedback from './Feedback'
const App = () => {
  const textoOK = 'Já chegou'
  const textoNOK = "Não chegou ainda"
  const funcaoOK = () => alert('Agradecemos o feedback')
  const funcaoNOK = () => alert('Verificaremos o ocorrido')

  const componentFeedback = (
  <Feedback
    textoOK={textoOK}
    textoNOK={textoNOK}
    funcaoOK={funcaoOK}
    funcaoNOK={funcaoNOK}/>
  )
  return (
    <div className='container border rounded mt-2'>
      <div className='row'>
        <div className='col-12'>
            <h1 className='display-5 text-center'>Seus pedidos</h1>
        </div>
      </div>
      <div className='row'>
        {/* <div className='col-sm-12 col-lg-6 col-xxl-3'>

        </div> */}
        <div className='col-sm-12 col-lg-6 col-xxl-3'>
          <Cartao
            cabecalho="23/01/2022">
            <Pedido 
              icone="fa-solid fa-book fa-2x fa-shake"
              titulo="Livro"
              descricao="Concrete Mathematics - Donald Knuth"
            />
            {componentFeedback}
          </Cartao>
        </div>
        <div className='col-sm-12 col-lg-6 col-xxl-3'>
          <Cartao
            cabecalho="15/04/2024">
            <Pedido 
              icone="fa-solid fa-hdd fa-2x fa-shake"
              titulo="SSD"
              descricao="A400 - Sata"
            />
            {componentFeedback}
          </Cartao>
        </div>
        <div className='col-sm-12 col-lg-6 col-xxl-3'>
          <Cartao
            cabecalho="23/01/2024">
            <Pedido 
              icone="fa-solid fa-face-smile fa-2x fa-shake"
              titulo="Batata sorridente"
              descricao="Essa é uma batata que sorri"
            />
            {componentFeedback}
          </Cartao>
        </div>
        <div className='col-sm-12 col-lg-6 col-xxl-3'>
          <Cartao
            cabecalho="15/02/2022">
            <Pedido 
              icone="fa-solid fa-chess-knight fa-2x fa-shake"
              titulo="Peça de xadrez"
              descricao="Um cavalo"
            />
            {componentFeedback}
          </Cartao>
        </div>
      </div>
    </div>
 )
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)