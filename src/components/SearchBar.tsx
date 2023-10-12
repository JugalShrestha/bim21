import { useState } from "react";
import { Link } from "react-router-dom";
import rootBranch from "./variables/rootBranch";

const SearchBar = () => {
  const [searchable, setSearchable] = useState("");
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchable(e.target.value);
  };
  return (
    <section className="hero-page">
      <div className="hero-page-slogan">
        <span>Search here ↓</span>
        <br />
        Find anything that you need
      </div>
      <section className="search-part">
        <div className="text-input">
          <input
            autoComplete="off"
            placeholder="For eg. Class Routine"
            value={searchable}
            onChange={handleSearch}
            type="text"
            name="search"
            id="search-id"
          ></input>
        </div>
        <Link
          to={
            searchable !== ""
              ? `${rootBranch}/search?query=${encodeURIComponent(
                  searchable.toLowerCase()
                )}`
              : "/bim21"
          }
          className="search-btn"
        >
          <div className="search-txt">Search</div>
          <div className="search-image">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </div>
        </Link>
      </section>
    </section>
  );
};

export default SearchBar;
