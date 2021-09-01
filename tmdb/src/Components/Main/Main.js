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
      fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=9dec800f789f21e12920e46fc4882908&page=1')
      .then( response => response.json() )
      .then( data => {
          console.log(data);
          this.setState({
              topRated: data.results 

          })
      })
      .catch(error=> console.log(error))
      

  }

  render() {
    return (
      <main>
        <button type="button">Cargar más tarjetas</button>
        <section className="card-container">
        {this.state.topRated?(
          this.state.topRated.map((movie, idx) => <Card data={movie} key={movie.title + idx} /> )
        ): (
          <h2> Loading... </h2>
        )}
        </section>
      </main>
    );
  }
}

export default Main;
