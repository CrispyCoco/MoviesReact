import React, { Component } from "react";
import "./card.css";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewMore: false,
      text: 'Ver más'
    };
  }

  moreInfo() {
    if (this.state.viewMore) {
      this.setState({ viewMore: false, text: 'Ver más'});
    } else {
      this.setState({ viewMore: true, text: 'Ver menos' });
    }
  }

  render() {
    return (
      <article className="card">
        <section className="navigation">
          <div>
            <i className="fas fa-chevron-left"></i>
            <i className="fas fa-chevron-right"></i>
          </div>
          <i className="far fa-trash-alt"></i>
        </section>
        <main>
          <img
            src={`https://image.tmdb.org/t/p/w500${this.props.data.poster_path}`}
            alt=""
          />
          <h3>{this.props.data.title}</h3>
          <p className="description">{this.props.data.overview}</p>
          <section
            className={`aditional-info ${
              this.state.viewMore ? "show" : "hide"
            }`}
          >
            <p>
              <strong>Rating:</strong> {this.props.data.vote_average}/5
            </p>
            <p>
              <strong>Premiere:</strong> {this.props.data.release_date}
            </p>
            <p>
              <strong>Popularity:</strong> {this.props.data.popularity}
            </p>
          </section>
          {/* <a href="vhuv">Ver más </a> */}
          <p className="more" onClick={ ()=> this.moreInfo() }> {this.state.text} </p>
        </main>
      </article>
    );
  }
}

export default Card;
