import React, { useEffect } from "react";
import SearchBar from "@theme-original/SearchBar";

export default function SearchBarWrapper(props) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://docsbot-standalone-git-develop-cookbookdev.vercel.app/docsbot.min.js";
    script.defer = true;
    document.head.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <SearchBar {...props} />
      <div id="__cookbook" data-api-key="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NWMxNzQ5ZDdlODQ5N2EyNWQ2NGJiMDYiLCJpYXQiOjE3MDcxNzcxMTcsImV4cCI6MjAyMjc1MzExN30.1aLVJhVnK5JfFXFmdcbQqJP_onJ94U2EL1xn-Tw0G8k" />
    </>
  );
}
