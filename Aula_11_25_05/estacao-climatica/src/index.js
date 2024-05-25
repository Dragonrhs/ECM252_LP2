import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import ReactDOM from "react-dom";

class App extends React.Component {
   constructor(props) {
         super(props)
         this.state = {
              latitude: null,
              longitude: null,
              estacao: null,
              data: null,
              icone: null
         }
 }

    icones = {
        inverno: 'fa-regular-snowflake',
        verao: 'fa-solid umbrella-beach',
        primavera: 'fa-solid-clover',
        outono: 'fa-canadian-maple-leaf'
    }

    obterestacao = (data,latitude) => {
        const anoAtual = data.getFullYear()
        //21/06
        const d1 = new Date(anoAtual, 5, 21)
        //24/09
        const d2 = new Date(anoAtual, 8, 24)
        //22/12
        const d3 = new Date(anoAtual, 11, 22)
        //21/03
        const d4 = new Date(anoAtual, 2, 21)

        const estounoSul = latitude < 0 

        if(data >= d1 && data < d2){
            return estounoSul ? 'Inverno' : 'Verão'
        }
        if(data >= d2 && data < d3){
            return estounoSul ? 'Primavera' : 'Outono'
        }
        if(data >= d3 && data < d4){
            return estounoSul ? 'Verão' : 'Inverno'
        }
        return estounoSul ? 'Outono' : 'Primavera'
    }

    obterlocalizacao = () => {
        window.navigator.geolocation.getCurrentPosition(
            (posicao) => {
                this.setState({
                    latitude: posicao.coords.latitude,
                    longitude: posicao.coords.longitude
                })
            }
        )
        
    }

    render() {

    return (
        <div>
        Começando...
        </div>
    )
}

}
ReactDOM.render(
    <app />,
    document.getElementById('root')
)
