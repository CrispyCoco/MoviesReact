import React, {Component} from "react"
import './header.css'
class Header extends Component{
    constructor(props){
        super(props)
        this.state= {
            value:'',
            status:''
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
            <h1> <a href="/">ChillMe</a></h1>
            <section>
                {!this.props.direction? <i className="fas fa-th" onClick={()=> this.props.change()}></i>: <i className="fas fa-align-justify" onClick={()=> this.props.change(this.props.direction)}></i>}
                <form action="" id="search-form" onSubmit={(event)=> this.preventSubmit(event)}> 
                    <input type="text" name="search" id="input_buscar" placeholder="Search" value={`${this.state.value}`} onChange={(event)=>this.controlChanges(event)}/>
                    {/* <button type="submit"><i className="fas fa-search"></i></button> */}
                </form>
                <span className="normal" onClick={() => this.props.sort()}><span uk-icon="icon: chevron-up" className="iconUK" ></span>ASC</span>
                <span className="reverse"><span uk-icon="icon: chevron-down" className="iconUK"></span>DESC</span>
            </section>
          </header>
        )
    }
}



export default Header