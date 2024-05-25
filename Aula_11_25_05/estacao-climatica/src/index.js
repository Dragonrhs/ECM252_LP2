import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import ReactDOM from "react-dom";

export default function App(){
    window.navigator.geolocation.getCurrentPosition((position) => {
        console.log(position)
    

    })

    return (
        <div>
        Começando...
        </div>
    )
}


ReactDOM.render(
    <app />,
    document.getElementById('root')
)