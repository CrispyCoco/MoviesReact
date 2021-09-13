import React, { Component } from "react";
import "./card.css";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewMore: false,
      text: "View more",
      disp: false,
    };
  }

  moreInfo() {
    if (this.state.viewMore) {
      this.setState({ viewMore: false, text: "View more" });
    } else {
      this.setState({ viewMore: true, text: "View less" });
    }
  }
  dispMore() {
    this.setState({
      dispMore: true,
    });
  }

  render() {
    return (
      <>
        {this.props.orientation ? (
          <article className="card">
            <section className="navigation">
              <div>
                <i className="fas fa-chevron-left"></i>
                <i className="fas fa-chevron-right"></i>
              </div>
              <i
                className="far fa-trash-alt"
                onClick={() => this.props.remove(this.props.data.id)}
              ></i>
            </section>
            <main>
              <img
                src={`https://image.tmdb.org/t/p/w500${this.props.data.poster_path}`}
                alt=""
              />
              <h3>{this.props.data.title}</h3>
              <p className={`${this.state.viewMore ? "a" : "description"}`}>
                {this.props.data.overview}
              </p>
              <section
                className={`aditional-info ${
                  this.state.viewMore ? "show" : "hide"
                }`}
              >
                <p>
                  <strong>Rating:</strong> {this.props.data.vote_average}/10
                </p>
                <p>
                  <strong>Premiere:</strong> {this.props.data.release_date}
                </p>
                <p>
                  <strong>Popularity:</strong> {this.props.data.popularity}
                </p>
              </section>
              {/* <a href="vhuv">Ver más </a> */}
              <p className="more" onClick={() => this.moreInfo()}>
                {" "}
                {this.state.text}{" "}
              </p>
            </main>
          </article>
        ) : (
          <article className="horizontal-card">
            <main>
              <img
                src={`https://image.tmdb.org/t/p/w500${this.props.data.poster_path}`}
                alt=""
              />
              <section className="container-flex">
                <div className="main-info">
                  <h3>{this.props.data.title}</h3>
                  {/* <a href="vhuv">Ver más </a> */}
                  <section className="navigation-flex">
                    <div>
                      <i className="fas fa-chevron-up fa-lg"></i>
                      <i className="fas fa-chevron-down fa-lg"></i>
                    </div>
                    <i
                      className="far fa-trash-alt fa-lg"
                      onClick={() => this.props.remove(this.props.data.id)}
                    ></i>
                  </section>
                </div>
                <section className="more-box">
                  <section
                    className={`aditional-info ${
                      this.state.viewMore ? "show" : "hide"
                    }`}
                  >
                    <p
                      className={`${this.state.viewMore ? "a" : "description"}`}
                    >
                      {this.props.data.overview}
                    </p>
                    <p>
                      <strong>Rating:</strong> {this.props.data.vote_average}/10
                    </p>
                    <p>
                      <strong>Premiere:</strong> {this.props.data.release_date}
                    </p>
                    <p>
                      <strong>Popularity:</strong> {this.props.data.popularity}
                    </p>
                  </section>
                  <p className="more" onClick={() => this.moreInfo()}>
                    {" "}
                    {this.state.text}{" "}
                  </p>
                </section>
              </section>
            </main>
          </article>
        )}
      </>
    );
  }
}

export default Card;
