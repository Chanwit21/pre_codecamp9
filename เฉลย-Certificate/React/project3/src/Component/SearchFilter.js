import React, { useEffect, useState } from 'react';
import data from '../mocks/data.json';

function SearchFilter() {
  const [itemsToDisplay, setItemsToDisplay] = useState([]);
  const [itemsToUse, setItemsToUse] = useState([]);
  const [cuisines, setCuisines] = useState([]);

  const filterOnSearch = (event) => {
    if (
      !event.target.value ||
      event.target.value === ' ' ||
      event.target.value === ''
    )
      setItemsToDisplay([...itemsToUse]);
    else {
      let newItemsToDisplay = [];
      newItemsToDisplay = itemsToUse.filter(
        (item) =>
          item['Name']
            .toLowerCase()
            .includes(event.target.value.toLowerCase()) ||
          item['Cuisine Style']
            .toLowerCase()
            .includes(event.target.value.toLowerCase()) ||
          item['City'].toLowerCase().includes(event.target.value.toLowerCase())
      );
      setItemsToDisplay(newItemsToDisplay);
    }
  };

  const optionSelected = () => {
    var e = document.getElementById('restfilter');
    var selected = e.options[e.selectedIndex].text;

    if (selected === 'Choose Any') setItemsToDisplay([...itemsToUse]);
    else {
      let newItemsToDisplay = [];
      newItemsToDisplay = itemsToUse.filter((item) =>
        item['Cuisine Style'].toLowerCase().includes(selected.toLowerCase())
      );
      setItemsToDisplay(newItemsToDisplay);
    }
  };

  const sortBy = () => {
    var e = document.getElementById('sortfilter');
    var selected = e.options[e.selectedIndex].value;

    if (selected === 'ranking') setItemsToDisplay([...itemsToUse]);
    else if (selected === 'asc') {
      let newitemsToDisplay = [...itemsToDisplay];
      newitemsToDisplay.sort(function (a, b) {
        return a['Rating'] - b['Rating'];
      });
      setItemsToDisplay(newitemsToDisplay);
    } else {
      let newitemsToDisplay = [...itemsToDisplay];
      newitemsToDisplay.sort(function (a, b) {
        return b['Rating'] - a['Rating'];
      });
      setItemsToDisplay(newitemsToDisplay);
    }
  };

  useEffect(() => {
    reRenderList();
  }, []);

  function reRenderList() {
    var initCuisines = [];
    var initItemsToDisplay = [];
    for (var i = 0; i < data.length; i++) {
      initItemsToDisplay.push(data[i]);
      data[i]['Cuisine Style']
        .substring(1, data[i]['Cuisine Style'].length - 2)
        .split(',')
        .forEach((cuisine) => {
          let c = cuisine.substring(1, cuisine.length - 1);
          c = c.includes("'") ? c.substring(1, c.length) : c;
          if (initCuisines.indexOf(c) < 0) {
            initCuisines.push(c);
          }
        });
    }

    setCuisines(initCuisines);
    setItemsToDisplay(initItemsToDisplay);
    setItemsToUse([...initItemsToDisplay]);
  }

  return (
    <div>
      <div className="restfilter">
        <div>
          Choose a cuisine : &nbsp;
          <select id="restfilter" onChange={optionSelected}>
            <option value="any">Choose Any</option>
            {cuisines.map((cuisine) => {
              return <option value={cuisine}>{cuisine}</option>;
            })}
          </select>
        </div>
        <div>
          Sort by : &nbsp;
          <select id="sortfilter" onChange={sortBy}>
            <option value="ranking">Ranking</option>
            <option value="asc">Rating: Low to High</option>
            <option value="des">Rating: High to Low</option>
          </select>
        </div>
      </div>
      <div className="restcontainer">
        {itemsToDisplay.map((rest) => {
          let cuisines = rest['Cuisine Style']
            .substring(1, rest['Cuisine Style'].length - 2)
            .split(',');
          return (
            <div className="rest">
              <div className="restinfo">
                <i
                  className="fas fa-map-marker"
                  style={{ color: 'orangered', fontSize: '12px' }}
                ></i>
                &nbsp;
                <span className="restcity">{rest['City']}</span>
                <br />
                <span className="restname">{rest['Name']}</span>
                <div className="restcuisines">
                  {cuisines.map((cuisine) => {
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
                    style={{ fontSize: '15px' }}
                    className="far fa-comment-alt"
                  ></i>
                  &nbsp;
                  {rest['Number of Reviews']}
                </div>
                <div>
                  <i style={{ fontSize: '15px' }} className="far fa-star"></i>
                  &nbsp;
                  {rest['Rating']}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SearchFilter;
