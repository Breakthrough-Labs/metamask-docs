import React from "react";
import SearchBar from "@theme-original/SearchBar";
import ChefGPT from "@cookbookdev/docusaurus-chefgpt/theme/SearchBar";

export default function SearchBarWrapper(props) {
  return (
    <>
      <SearchBar {...props} />
      <ChefGPT />
    </>
  );
}
