import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/SearchBar';
const API_KEY = 'AIzaSyAeaSmAGYwENVogz724rh88kMOQlinm8fg';

// Create a new Component should produce HTML
const App = () => {
    return(
      <div>
        <h1>Youtube API Video Search</h1>
        <SearchBar />
      </div>
    )
}
// Append into the Dom... The Component we are building above.
ReactDOM.render(
  <App />,
  document.querySelector('.container')
);
