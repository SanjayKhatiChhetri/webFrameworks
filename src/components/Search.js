import React, { useState } from "react";
import s from "./Search.module.css";

const Search = (props) => {
  const { handleSearch } = props;
  const [search, setSearch] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(search);
  };

  return (
    <form className={s.Search_Wrapper} onSubmit={handleSubmit}>
      <input
        type="text"
        className={s.Search_Input}
        placeholder="Search by name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button className={s.Search_Button} type="submit">
        Search
      </button>
    </form>
  );
};

export default Search;
