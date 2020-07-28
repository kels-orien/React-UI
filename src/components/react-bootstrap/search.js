import React from "react";


const Search = () => {
  return (
    <div className="search-form-container container">
      <form className="new-search-form" action="">
        <div className="search-field-container">
          <div className="search-place">
            <div className="input-placeholder">
              <div className="placeholder-icon">
               
              </div>
              <span className="twitter-typeahead">
                <input
                  data-ga-label="search-suggestions"
                  data-ga-category="Home-Page-Interaction"
                  data-ga-action="search"
                  type="text"
                  className="form-control icon--present input-lg typeahead tt-hint"
                  required=""
                  aria-label="Search Field"
                  disabled=""
                  autocomplete="off"
                  spellcheck="false"
                />
                <input
                  data-ga-label="search-suggestions"
                  data-ga-category="Home-Page-Interaction"
                  data-ga-action="search"
                  type="text"
                  name="query"
                  className="form-control icon--present input-lg typeahead tt-input"
                  placeholder="Search for a city or particular hotel"
                  required=""
                  aria-label="Search Field"
                  autocomplete="off"
                  spellcheck="false"
                  dir="auto"
                />
                <pre aria-hidden="true"></pre>
                <span className="tt-dropdown-menu">
                  <div className="tt-dataset-hotels"></div>
                  <div className="tt-dataset-towns"></div>
                </span>
              </span>
            </div>
          </div>
        </div>

        <div className="homepage-checkin">
          <div className="check-in">
            <div className="input-placeholder">
              <div className="placeholder-icon"></div>
              <input
                type="text"
                id="checkin"
                name="checkin"
                className="form-control icon--present input-lg"
                placeholder="Check in"
                data-date-format="dd-mm-yyyy"
                readonly=""
                aria-label="Checkin date"
              />
            </div>
          </div>
        </div>

        <div className="homepage-checkout">
          <div className="check-out">
            <div className="input-placeholder">
              <div className="placeholder-icon"></div>
              <input
                type="text"
                id="checkout"
                name="checkout"
                className="form-control icon--present input-lg"
                placeholder="Check out"
                data-date-format="dd-mm-yyyy"
                readonly=""
                aria-label="Checkout date"
              />
            </div>
          </div>
        </div>

        <div className="find">
          <button
            data-ga-label="find-hotels"
            data-ga-category="Home-Page-Interaction"
            data-ga-action="search"
            type="submit"
            className="btn new-btn-primary"
            aria-label="Search Button"
          >
            Find Hotels
          </button>
        </div>
      </form>
    </div>
  );
};

export default Search;
