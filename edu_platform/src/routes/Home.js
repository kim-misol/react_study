import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
const ReactDOM = require('react-dom');

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
function tick() {
  ReactDOM.render(
    <Clock date={new Date()} />,
    document.getElementById('root')
  );
}

setInterval(tick, 1000);

//function Home() {
////    function formatName(user) {
////      return user.firstName + ' ' + user.lastName;
////    }
////
////    function getGreeting(user) {
////      if (user) {
////        return <h1>Hello, {formatName(user)}!</h1>;
////      }
////      return <h1>Hello, Stranger.</h1>;
////    }
////
////    const user = {
////      firstName: 'Harper',
////      lastName: 'Perez'
////    };
////
////    const element = (
////      <div>
////        {getGreeting(user)}
////        <Link to="/posts" className="Home-link">Post List</Link>
////      </div>
////    );
//    function formatDate(date) {
//      return date.toLocaleDateString();
//    }
//
//    function Comments(props) {
//        return (
//            <div classNAme="Comments">
//                  <div className="Comments-user">
//                      {props.comments.user}
//                  </div>
//                  <div className="Comments-content">
//                      {props.comments.comment}
//                  </div>
//            </div>
//        );
//    }
//
//    function Post(props) {
//      return (
//        <div className="Post">
//          <div className="Post-title">{props.title}</div>
//          <div className="Post-content">{props.content}</div>
//          <div className="Post-date">
//            {formatDate(props.date)}
//          </div>
//          <Comments comments={props.comments} />
//        </div>
//      );
//    }
//
//    const post = {
//      date: new Date(),
//      title: 'Post title',
//      content: 'Post content',
//      comments: {
//        user: 'user1',
//        comment: 'comment'
//      },
//    };
//
//    return (
//        <div className="Home">
//            <header className="Home-header">
//                 <Post
//                    date={post.date}
//                    title={post.title}
//                    content={post.content}
//                    comments={post.comments}
//                  />
//            </header>
//        </div>
//    );
//}


export default Home;

