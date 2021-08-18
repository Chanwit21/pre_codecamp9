import React, { useState } from 'react';

function SearchForm(props) {
  const { fetchSearch } = props;

  const [input, setInput] = useState('');

  const handleForm = (event) => {
    event.preventDefault();
    let username = input;
    fetchSearch(username);
  };

  return (
    <div className="search-bar">
      <form className="input-group" onSubmit={handleForm}>
        <input
          type="search"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type Username here"
          className="form-control"
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-warning">
            Submit
          </button>
        </span>
      </form>
    </div>
  );
}

export default SearchForm;
