import React, { Component } from "react";
import Card from "../Card/Card";
import Header from "../Header/Header";
import "./main.css";

class Main extends Component {
  constructor() {
    super();
    this.state = {
      topRated: null,
      initialMovies: null,
      page: 1,
      action: false,
      normal: true,
      asc: false,
      default: true,
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
          initialMovies: data.results,
        });
      })
      .catch((error) => console.log(error));
  }

  remove(removed) {
    if (this.state.topRated) {
      let newList = this.state.topRated.filter((movie) => movie.id !== removed);
      this.setState({
        topRated: newList,
        initialMovies: newList,
      });
    }
  }

  addMore() {
    this.setState(
      {
        page: this.state.page + 1,
      },
      () => {
        if (this.state.topRated) {
          fetch(
            "https://api.themoviedb.org/3/movie/top_rated?api_key=9dec800f789f21e12920e46fc4882908&page=" +
              this.state.page
          )
            .then((response) => response.json())
            .then((data) => {
              console.log(data);
              let newList = this.state.topRated.concat(data.results);
              if (!this.state.asc && !this.state.default) {
                this.setState({
                  topRated: newList.sort((a, b) => {
                    let nameA = a.title.toLowerCase();
                    let nameB = b.title.toLowerCase();
                    if (nameA < nameB) {
                      return 1;
                    }
                    if (nameA > nameB) {
                      return -1;
                    }
                    return 0;
                  }),
                  initialMovies: this.state.initialMovies.concat(data.results),
                  asc: false,
                });
              } else if (this.state.asc) {
                this.setState({
                  topRated: newList.sort((a, b) => {
                    let nameA = a.title.toLowerCase();
                    let nameB = b.title.toLowerCase();
                    if (nameA < nameB) {
                      return -1;
                    }
                    if (nameA > nameB) {
                      return 1;
                    }
                      return 0;
                  }),
                  initialMovies: this.state.initialMovies.concat(data.results),
                  asc: true,
                });
              } else {
                this.setState({
                  topRated: newList,
                  initialMovies: this.state.initialMovies.concat(data.results),
                });
              }
            })
            .catch((error) => console.log(error));
        }
      }
    );
  }

  searching(searched) {
    if (this.state.topRated || this.state.action) {
      let searchedList = this.state.initialMovies.filter((movie) =>
        movie.title.toLowerCase().includes(searched.toLowerCase())
      );
      console.log(this.state.topRated);
      if (searchedList.length === 0) {
        this.setState({ topRated: null, action: true });
      } else {
        this.setState({ topRated: searchedList, action: true });
      }
    }
  }

  changeOrientation() {
    if (this.state.normal) {
      this.setState({ normal: false });
    } else {
      this.setState({ normal: true });
    }
  }

  changeOrder() {
    if (!this.state.asc) {
      this.setState({
        asc: true,
        topRated: this.state.topRated.sort((a, b) => {
          let nameA = a.title.toLowerCase();
          let nameB = b.title.toLowerCase();
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          return 0;
        }),
        default: false,
      });
    } else {
      this.setState({
        asc: false,
        topRated: this.state.topRated.sort((a, b) => {
          let nameA = a.title.toLowerCase();
          let nameB = b.title.toLowerCase();
          if (nameA > nameB) {
            return -1;
          }
          if (nameA < nameB) {
            return 1;
          }
          return 0;
        }),
        default: false,
      });
    }
  }
  render() {
    return (
      <>
        <Header
          search={(searched) => this.searching(searched)}
          change={() => this.changeOrientation()}
          direction={this.state.normal}
          sort={() => this.changeOrder()}
          asc={this.state.asc}
        />

        <main className="container">
          <button
            type="button"
            onClick={() => this.addMore()}
            className={`${!this.state.topRated ? "empty" : "more-cards"}`}
          >
            Load more cards
          </button>
          <section
            className={this.state.normal ? `card-container` : `changing-flex`}
          >
            {this.state.topRated ? (
              this.state.topRated.map((movie, idx) => (
                <Card
                  data={movie}
                  key={movie.title + idx}
                  remove={(removed) => this.remove(removed)}
                  orientation={this.state.normal}
                />
              ))
            ) : !this.state.action ? (
              <h2> Loading... </h2>
            ) : (
              <h2>There are no results for your search</h2>
            )}
          </section>
        </main>
      </>
    );
  }
}

export default Main;
