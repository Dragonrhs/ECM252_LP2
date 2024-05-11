import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

const App =() =>{
    return(
        <div className='container border rounded mt-2'>
            <div className='row'>
                <div className='col-12'>
                    <h1 className='display 5 text-center'>Seus Pedidos </h1>
                </div>
            </div>
            <div className='row'>
                {/*<div className='col-sm-12 col-lg-6 col-xxl-3'>*/}*4

                <div className='col-sm-12 col-lg-6 col-xxl-3'>

                </div>

                <div className='col-sm-12 col-lg-6 col-xxl-3'>

                </div>
                <div className='col-sm-12 col-lg-6 col-xxl-3'>
                
                </div>
                <div className='col-sm-12 col-lg-6 col-xxl-3'>

                </div>                
                
                
            </div>
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('#root')
)