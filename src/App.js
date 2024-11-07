import React, { useState } from "react";

const DictionaryApp = () => {
  const [definition, setDefinition] = useState("");
  const [error, setError] = useState(false);

  // Dictionary object for valid words
  const dictionary = {
    react: "A JavaScript library for building user interfaces.",
    component: "A reusable building block in React.",
    javascript: "A programming language commonly used in web development."
  };

  const searchWord = () => {
    const word = document.querySelector("#word-input").value.trim().toLowerCase();

    if (!word) {
      setDefinition("Word not found in the dictionary.");
      setError(true);
      return;
    }

    if (dictionary[word]) {
      setDefinition(dictionary[word]);
      setError(false);
    } else {
      setDefinition("Word not found in the dictionary.");
      setError(true);
    }
  };

  return (
    <div>
      <h1>Dictionary App</h1>
      <input type="text" id="word-input" placeholder="Search for a word" />
      <button id="search-button" onClick={searchWord}>Search</button>
      <div id="definition-container">
        <strong>Definition:</strong>
        <p id="definition-text" style={{ color: error ? "red" : "black" }}>
          {definition}
        </p>
      </div>
    </div>
  );
};

export default DictionaryApp;
