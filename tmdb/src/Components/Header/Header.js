import React, {Component} from "react"
import './header.css'
class Header extends Component{
    constructor(props){
        super(props)
        this.state= {
            value:''
        }
    }

    preventSubmit(event){
        event.preventDefault()
    }

    controlChanges(event){
        this.setState({
            value:event.target.value
        }, ()=> {
            this.props.search(this.state.value)
        })
    }

    render(){
        return( 
        <header>
            <h1>ChillMe</h1>
            <section>
                <i className="fas fa-th"></i>
                <i className="fas fa-align-justify"></i>
                <form action="" id="search-form" onSubmit={(event)=> this.preventSubmit(event)}> 
                    <input type="text" name="search" id="input_buscar" placeholder="Search" value={`${this.state.value}`} onChange={(event)=>this.controlChanges(event)}/>
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