import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar_class';
const API_KEY = 'AIzaSyBt7Z4lOiUuv0ZP4wtFHU6ZNRwZZI9tSUY';



// The most parent component should be resposible for getting data for the app.
// Create a new component. This comonent shoudl produce
// some HTML
class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos : [] };

    YTSearch({key: API_KEY, term:'surfboards'}, (videos) => {
      this.setState({ videos });
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
}

// Take this component's generated HTML and put it
// on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
