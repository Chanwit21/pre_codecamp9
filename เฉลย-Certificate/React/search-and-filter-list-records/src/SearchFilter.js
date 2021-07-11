import React, { Component } from "react";
import data from "./data.json";

class SearchFilter extends Component {
  state = {
    itemsToDisplay: [],
    itemsToUse: [],
    cuisines: []
  };
  render() {
    return (
      <div>
        <div className="restfilter">
          <div>
            Choose a cuisine : &nbsp;
            <select id="restfilter" onChange={this.optionSelected}>
              <option value="any">Choose Any</option>
              {this.state.cuisines.map(cuisine => {
                return <option value={cuisine}>{cuisine}</option>;
              })}
            </select>
          </div>
          <div>
            Sort by : &nbsp;
            <select id="sortfilter" onChange={this.sortBy}>
              <option value="ranking">Ranking</option>
              <option value="asc">Rating: Low to High</option>
              <option value="des">Rating: High to Low</option>
            </select>
          </div>
        </div>
        <div className="restcontainer">
          {this.state.itemsToDisplay.map(rest => {
            let cuisines = rest["Cuisine Style"]
              .substring(1, rest["Cuisine Style"].length - 2)
              .split(",");
            return (
              <div className="rest">
                <div className="restinfo">
                  <i
                    className="fas fa-map-marker"
                    style={{ color: "orangered", fontSize: "12px" }}
                  ></i>
                  &nbsp;
                  <span className="restcity">{rest["City"]}</span>
                  <br />
                  <span className="restname">{rest["Name"]}</span>
                  <div className="restcuisines">
                    {cuisines.map(cuisine => {
                      let cuisineToShow = cuisine.substring(
                        1,
                        cuisine.length - 1
                      );
                      cuisineToShow = cuisineToShow.includes("'")
                        ? cuisineToShow.substring(1, cuisineToShow.length)
                        : cuisineToShow;
                      return (
                        <div pill className="restcuisine" variant="light">
                          {cuisineToShow}
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="sepline"></div>
                <div className="reststats">
                  <div>
                    <i
                      style={{ fontSize: "15px" }}
                      className="far fa-comment-alt"
                    ></i>
                    &nbsp;
                    {rest["Number of Reviews"]}
                  </div>
                  <div>
                    <i style={{ fontSize: "15px" }} className="far fa-star"></i>
                    &nbsp;
                    {rest["Rating"]}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  filterOnSearch = event => {
    if (
      !event.target.value ||
      event.target.value === " " ||
      event.target.value === ""
    )
      this.setState({ itemsToDisplay: [...this.state.itemsToUse] });
    else {
      let itemsToDisplay = [];
      itemsToDisplay = this.state.itemsToUse.filter(
        item =>
          item["Name"]
            .toLowerCase()
            .includes(event.target.value.toLowerCase()) ||
          item["Cuisine Style"]
            .toLowerCase()
            .includes(event.target.value.toLowerCase()) ||
          item["City"].toLowerCase().includes(event.target.value.toLowerCase())
      );
      this.setState({ itemsToDisplay });
    }
  };

  optionSelected = () => {
    var e = document.getElementById("restfilter");
    var selected = e.options[e.selectedIndex].text;

    if (selected === "Choose Any")
      this.setState({ itemsToDisplay: [...this.state.itemsToUse] });
    else {
      let itemsToDisplay = [];
      itemsToDisplay = this.state.itemsToUse.filter(item =>
        item["Cuisine Style"].toLowerCase().includes(selected.toLowerCase())
      );
      this.setState({ itemsToDisplay });
    }
  };

  sortBy = () => {
    var e = document.getElementById("sortfilter");
    var selected = e.options[e.selectedIndex].value;

    if (selected === "ranking")
      this.setState({ itemsToDisplay: [...this.state.itemsToUse] });
    else if (selected === "asc") {
      let itemsToDisplay = [...this.state.itemsToDisplay];
      itemsToDisplay.sort(function(a, b) {
        return a["Rating"] - b["Rating"];
      });
      this.setState({ itemsToDisplay });
    } else {
      let itemsToDisplay = [...this.state.itemsToDisplay];
      itemsToDisplay.sort(function(a, b) {
        return b["Rating"] - a["Rating"];
      });
      this.setState({ itemsToDisplay });
    }
  };

  componentDidMount() {
    this.reRenderList();
  }

  reRenderList() {
    var cuisines = [];
    var itemsToDisplay = [];
    for (var i = 0; i < data.length; i++) {
      itemsToDisplay.push(data[i]);
      data[i]["Cuisine Style"]
        .substring(1, data[i]["Cuisine Style"].length - 2)
        .split(",")
        .forEach(cuisine => {
          let c = cuisine.substring(1, cuisine.length - 1);
          c = c.includes("'") ? c.substring(1, c.length) : c;
          if (cuisines.indexOf(c) < 0) {
            cuisines.push(c);
          }
        });
    }

    this.setState({ cuisines });

    this.setState({ itemsToDisplay }, () => {
      this.setState({ itemsToUse: [...this.state.itemsToDisplay] });
    });
  }
}

export default SearchFilter;