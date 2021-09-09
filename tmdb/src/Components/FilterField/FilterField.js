import React, {Component} from 'react';

class FilterField extends Component{
    constructor(){
        super();
        this.state={
            filterBy:''
        }
    }
    preventSubmit(e){
        e.preventDefault();
        console.log('evitando el envio');
    }

    controlChanges(event){
        this.setState({
            value:event.target.value
        }, ()=> {
            this.props.filterMovies(this.state.filterBy)
        })
    }

    render(){
        return(
            <form action="" onSubmit={(milanesa)=>this.preventSubmit(milanesa)}>
                <input type="text" onChange={(papas)=>this.controlChanges(papas)} value={this.state.filterBy} placehoder='ingrese su nombre'/>
            </form>
        )
    }

}


export default FilterField;