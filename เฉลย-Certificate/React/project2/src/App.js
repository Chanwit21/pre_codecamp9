import React, { useEffect, useState } from 'react';
import './App.css';
import SearchForm from './Component/SearchForm';
import Header from './Component/Header';
import Profiles from './Component/Profiles';

function App() {
  const [data, setData] = useState('');
  const initSearchText = 'nsebhastian ';

  const API = 'https://api.github.com/';

  const fetchSearch = (username) => {
    let url = `${API}search/users?q=${username}`;
    fetch(url)
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((error) => console.log('Oops! . There Is A Problem' + error));
  };

  useEffect(() => {
    fetchSearch(initSearchText);
  }, [initSearchText]);

  return (
    <div>
      <div className="container">
        <Header />
        <SearchForm fetchSearch={fetchSearch} />
        <Profiles data={data} />
      </div>
    </div>
  );
}

export default App;
