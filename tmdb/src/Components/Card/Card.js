import React, { Component } from "react";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <article>
        <section className="navigation">
          <div>
            <i className="fas fa-chevron-left"></i>
            <i className="fas fa-chevron-right"></i>
          </div>
          <i className="far fa-window-close"></i>
        </section>
        <main>
          <img src={`https://image.tmdb.org/t/p/w500${this.props.data.poster_path}`} alt="" />
          <h3>{this.props.data.title}</h3>
          <p className="description">
            {this.props.data.overview}
          </p>
          <section className="aditional-info">
            <p>
              {this.props.data.vote_average}
            </p>
            <p>
              {this.props.data.release_date}
            </p>
            <p>
              {this.props.data.popularity}
            </p>
          </section>
          <a href="vhuv">Ver más </a>
        </main>
      </article>
    );
  }
}

export default Card;
