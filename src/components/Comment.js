import React from "react";
import ButtonLike from "./buttonLike";
import "../styles/App.css";

let comments = {
  comments: [
    {
      id: 1,
      text: "Hello World",
      name: "Bob",
      likes: 5,
      replies: [
        {
          id: 10,
          text: "Can you write smth better?",
          name: "Emily",
          likes: 10,
          replies: []
        },
        {
          id: 11,
          text: "Where does it come from?",
          name: "Emily",
          likes: 0,
          replies: [
            {
              id: 111,
              text: "Where can I get some?",
              name: "Carl"
            }
          ]
        }
      ]
    },
    {
      id: 2,
      text: "Hello World! How are you today?",
      name: "John Random",
      likes: 3,
      replies: [{ id: 20, text: "I'm fine", name: "Matt" }]
    },
    {
      id: 3,
      likes: 1,
      text: "Lerem Ipsum.... Hi",
      name: "Bob"
    }
  ]
};

let Comment = class Comment extends React.Component {
  render() {
    const { name, text, replies, id, index } = this.props;
    return (
      <div className="talk-branch__item">
        <div className="talk-branch-main">
          <div className="talk-branch__body" id="person{id}">
            <div className="talk-branch__body-author">
              <span className="talk-branch__body-name" itemProp="name">
                {name}
              </span>
            </div>
            <div className="talk-branch__text" itemProp="reviewBody">
              {text}
              <ButtonLike className="button-like" />
            </div>
            <div className="talk-branch__reply">
              <button onClick={this.toggleForm}>Replies</button>
            </div>
          </div>
        </div>
        <div className="sub-comments">
          {replies && replies.length !== 0 ? (
            <CommentBuild comments={replies} />
          ) : (
            false
          )}
        </div>
      </div>
    );
  }
};
class CommentBuild extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.comments.map((item, id) => {
          return (
            <div className="talk-branch" key={id}>
              <Comment {...item} />
            </div>
          );
        })}
      </div>
    );
  }
}
class CommentList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <CommentBuild comments={comments.comments} />
      </div>
    );
  }
}

export default CommentList;
