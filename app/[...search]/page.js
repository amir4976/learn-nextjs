import React from "react";

function Search({ params, searchParams }) {
  return (
    <h1>
      Search Page: {params.search[1]} - {params.search[2]} - {params.search[3]}
    </h1>
  );
}

export default Search;
