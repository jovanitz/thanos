import React from 'react';

const Search = ({ callback = () => {} } = {}) => (
  <div className="search">
    <div className="search__name">Busca</div>
    <input onChange={ e => callback(e.target.value) } />
  </div>
);

export default Search;