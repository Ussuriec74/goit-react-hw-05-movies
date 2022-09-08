import { useState } from "react";
import { SearchbarInput } from 'components/Searchbar/Searchbar.styled';

export const Searchbar = ({ onSubmit }) => {
  
  const [searchQuery, setSearchQuery] = useState('');

  const handleChange = event => {
    setSearchQuery(event.target.value.trim());
  };

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(searchQuery);
    setSearchQuery('');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <SearchbarInput
        value={searchQuery} 
        onChange={handleChange}
        type="text"
        placeholder="Search parameters"
        />
        <button type="submit">
          Search
        </button>
      </form>
    </>
  )
}