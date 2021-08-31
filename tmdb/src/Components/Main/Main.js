import React, { Component } from "react";
import Card from "../Card/Card";

class Main extends Component {
  constructor() {
    super();
    this.state = {
        topRated: null
    };
  }

  componentDidMount(){
      fetch('https://developers.themoviedb.org/3/movies/get-top-rated-movies?api_key=cc55526ed6d9221ada36a41066b7c9ea')
      .then( response => response.json() )
      .then( data => {
          console.log(data);
          this.setState({
              

          })
      })
      .catch(error=> console.log(error))
      

  }

  render() {
    return (
      <main>
        <button type="button">Cargar más tarjetas</button>
        <section className="card-container">
          <Card />
        </section>
      </main>
    );
  }
}

export default Main;
