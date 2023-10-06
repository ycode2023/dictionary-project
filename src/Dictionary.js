 import React, {useState} from "react";
 import axios from "axios";
 import Results from "./Results";
 import "./Dictionary.css";


 export default function Dictionary(props){
let [keyword, setKeyword] = useState(props.defaultKeyword);
let [results, setResults] = useState(null);
let [loaded, setLoaded] = useState(false);


function handleRespone(response){
    setResults(response.data[0]);
}

function search(){
  // documentation: https://dictionaryapi.dev/

  let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
  axios.get(apiUrl).then(handleRespone);
}

function handleSubmit(event){
  event.preventDefault();
  search();
}

function handleKeywordChange(event){
setKeyword(event.target.value);
}

function load() {
    setLoaded(true);
    search();
}

if(loaded){
  return (
    <div className="Dictionary">
      <section>
        <h2>What word are you looking for?</h2>
        <form onSubmit={handleSubmit}>
          <input type="search" onChange={handleKeywordChange} defaultValue={props.defaultKeyword} />
        </form>
        <div className="hint">Suggestions: Earth, Climate Change, Net Zero</div>
      </section>
      <Results results={results} />
    </div>
  );
} else{
    load();
    return "Loading";
}
 }
