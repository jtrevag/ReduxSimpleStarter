import React, {Component} from 'react';
import { connect } from 'react-redux'

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li key={book.title} className="list-group-item">{book.title}</li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  }
}

// glue between react and redux; takes in state and returns a stateful object.
// essentially sets this.props.varNameHere
function mapStateToProps(state) {
  // Whatever is returned will show as props
  // inside of BookList
  return {
    books: state.books
  };
}

export default connect(mapStateToProps)(BookList);
