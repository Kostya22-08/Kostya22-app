import React, { Component } from 'react';

import { connect } from "react-redux"

class Article extends Component {
  render() {
    return (
        <div key={this.props.id}> 
          <p>{this.props.date}</p>
          <h1>{this.props.title}</h1>
          <p>{this.props.text}</p>
          <img className="im" src={this.props.img}/>
              
        </div>
      )
  }
}

function mapStateToProps(state) {
  return {
    id: state.Article.id,
    title: state.Article.title,
    date: state.Article.date,
    text: state.Article.text,
    img: state.Article.img
  }  
}

export default connect(mapStateToProps)(Article);