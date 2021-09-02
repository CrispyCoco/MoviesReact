import React, {Component} from "react"
import './header.css'
class Header extends Component{
    constructor(){
        super()
        this.state= {

        }
    }
    render(){
        return( 
        <header>
            <h1>ChillMe</h1>
            <section>
                <i className="fas fa-th"></i>
                <i className="fas fa-align-justify"></i>
                <form action="" id="search-form">
                    <input type="text" name="search" id="input_buscar" placeholder="Search"/>
                    {/* <button type="submit"><i className="fas fa-search"></i></button> */}
                </form>
                <span className="normal"><span uk-icon="icon: chevron-up" className="iconUK"></span> ASC</span>
                <span className="reverse"><span uk-icon="icon: chevron-down" className="iconUK"></span>DESC</span>
            </section>
          </header>
        )
    }
}



export default Header