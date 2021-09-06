import React, { Component } from "react";
import Card from "../Card/Card";
import Header from "../Header/Header";
import "./main.css";

class Main extends Component {
  constructor() {
    super();
    this.state = {
      topRated: null,
      page: 1,
    };
  }

  componentDidMount() {
    fetch(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=9dec800f789f21e12920e46fc4882908&page=" +
        this.state.page
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.setState({
          topRated: data.results,
        });
      })
      .catch((error) => console.log(error));
  }

  remove(removed) {
    if (this.state.topRated) {
      let newList = this.state.topRated.filter((movie) => movie.id !== removed);
      this.setState({ topRated: newList });
    }
  }

  addMore() {
    this.setState({
      page: this.state.page + 1,
    });
    if (this.state.topRated) {
      fetch(
        "https://api.themoviedb.org/3/movie/top_rated?api_key=9dec800f789f21e12920e46fc4882908&page=" +
          this.state.page
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(data);

          this.setState({
            topRated: this.state.topRated.concat(data.results),
          });
        })
        .catch((error) => console.log(error));
    }
  }

  searching(searched) {
    if (this.state.topRated) {
      let searchedList = this.state.topRated.filter((movie) =>
        movie.title.toLowerCase().includes(searched.toLowerCase())
      );
      console.log(searchedList);
      this.setState({ topRated: searchedList });
    }
  }

  render() {
    return (
      <>
        <Header search={(searched)=> this.searching(searched)} />

        <main className="container">
          <button
            type="button"
            onClick={() => this.addMore()}
            className="more-cards"
          >
            Load more cards
          </button>
          <section className="card-container">
            {this.state.topRated ? (
              this.state.topRated.map((movie, idx) => (
                <Card
                  data={movie}
                  key={movie.title + idx}
                  remove={(removed) => this.remove(removed)}
                />
              ))
            ) : (
              <h2> Loading... </h2>
            )}
          </section>
        </main>
      </>
    );
  }
}

export default Main;
