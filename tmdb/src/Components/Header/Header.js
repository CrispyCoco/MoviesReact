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
            <>
                <header className="pc">
                    <h1> <a href="/">ChillMe</a></h1>
                    <section>
                        {!this.props.direction? <i className="fas fa-th" onClick={()=> this.props.change()}></i>: <i className="fas fa-align-justify" onClick={()=> this.props.change()}></i>}
                        <form action="" id="search-form" onSubmit={(event)=> this.preventSubmit(event)}> 
                            <input type="text" name="search" id="input_buscar" placeholder="Search" value={`${this.state.value}`} onChange={(event)=>this.controlChanges(event)}/>
                            {/* <button type="submit"><i className="fas fa-search"></i></button> */}
                        </form>
                        {this.props.asc? (
                        <span className="reverse" onClick={() => this.props.sort()}><span uk-icon="icon: chevron-down" className="iconUK"></span>DESC</span>

                        ):(
                        <span className="normal" onClick={() => this.props.sort()}><span uk-icon="icon: chevron-up" className="iconUK" ></span>ASC</span>
                        )}
                    </section>
                </header>
                <header className="mobile">
                    <div className="navBar">
                        <button className="uk-button uk-button-default uk-margin-small-right menu" type="button" uk-toggle="target: #offcanvas-nav-primary"><span uk-icon="icon: table" className="tableIcon"></span></button>

                        <div id="offcanvas-nav-primary" uk-offcanvas="overlay: true" >
                            <div className="uk-offcanvas-bar uk-flex uk-flex-column" >
                                <ul className="uk-nav uk-nav-primary uk-nav-center uk-margin-auto-vertical" >
                                    <li className="uk-active"><h1><a href="/">ChillMe</a></h1></li>
                                    <li>{!this.props.direction? <i className="fas fa-th" onClick={()=> this.props.change()}></i>: <i className="fas fa-align-justify" onClick={()=> this.props.change(this.props.direction)}></i>}</li>
                                    
                                    <li className="uk-nav-divider"></li>
                                    <li className="asc"> {this.props.asc? (
                        <span className="reverse" onClick={() => this.props.sort()}><span uk-icon="icon: chevron-down" className="iconUK"></span>DESC</span>

                        ):(
                        <span className="normal" onClick={() => this.props.sort()}><span uk-icon="icon: chevron-up" className="iconUK" ></span>ASC</span>
                        )}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <form action="" id="search-form" onSubmit={(event)=> this.preventSubmit(event)}> 
                            <input type="text" name="search" id="input_buscar" placeholder="Search" value={`${this.state.value}`} onChange={(event)=>this.controlChanges(event)}/>
                            {/* <button type="submit"><i className="fas fa-search"></i></button> */}
                        </form>
                </header> 
          </>
        )
    }
}



export default Header