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
      fetch('https://developers.themoviedb.org/3/movies/get-top-rated-movies')
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
