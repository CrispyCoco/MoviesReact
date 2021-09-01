import React, {Component} from "react"
import './footer.css'

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
                    <li>Joaquin Gomez Rodriguez</li>
                    <li>Catalina Rosella</li>
                    <li>Martina Triulzi</li>
                </ul>
            </footer>
        )
    }
}



export default Footer