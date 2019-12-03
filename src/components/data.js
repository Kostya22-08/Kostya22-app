import React, { Component } from "react";
import Article from "./Article";
import CommentList from "./Comment";

class App extends Component {
  render() {
    return (
      <div>
        <Article className="article" />
        <CommentList className="comment-list" />
      </div>
    );
  }
}

export default App;
