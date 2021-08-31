import React, {Component} from "react"

class Footer extends Component{
    constructor(){
        super()
        this.state= {

        }
    }
    render(){
        return( 
            <footer>
                <ul className="team">
                    <li>Nombre integrante 1</li>
                    <li>Nombre integrante 2</li>
                    <li>Nombre integrante 3</li>
                </ul>
            </footer>
        )
    }
}



export default Footer