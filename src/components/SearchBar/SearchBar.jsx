import React, { useState } from "react";
import { ContainerSearch } from './SearchBar.style'
import { BiSearchAlt } from 'react-icons/bi'

export default function SearchBar({onSearch}) {
    const [city, setCity] = useState('')
  return (
    <ContainerSearch>
      <form onSubmit={(e) => {
        e.preventDefault();
        onSearch(city);
        setCity('')
      }}>
        <input
          type="text"
          placeholder="Ciudad..."
          value={city}
          onChange={ev => setCity(ev.target.value)}
        />
        <button type="submit"> <BiSearchAlt/> </button>
      </form>
    </ContainerSearch>
  );
}
