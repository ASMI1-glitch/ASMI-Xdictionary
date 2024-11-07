import "./styles.css";

import React, { useState } from "react";

function XDictionary() {
  // Initialize dictionary state with predefined words and meanings
  const [dictionary] = useState([
    {
      word: "React",
      meaning: "A JavaScript library for building user interfaces.",
    },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." },
  ]);

  // State for user input and search result
  const [searchTerm, setSearchTerm] = useState("");
  const [result, setResult] = useState("");

  // Function to handle the search action
  const handleSearch = () => {
    const foundWord = dictionary.find(
      (entry) => entry.word.toLowerCase() === searchTerm.toLowerCase()
    );
    if (foundWord) {
      setResult(foundWord.meaning);
    } else {
      setResult("Word not found in the dictionary.");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>XDictionary</h1>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Enter a word"
      />
      <button onClick={handleSearch}>Search</button>
      <p>{result}</p>
    </div>
  );
}

export default XDictionary;
