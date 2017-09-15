import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar_class';

const API_KEY = 'AIzaSyBt7Z4lOiUuv0ZP4wtFHU6ZNRwZZI9tSUY';

// Create a new component. This comonent shoudl produce
// some HTML
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

// Take this component's generated HTML and put it
// on the page (in the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));
