import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
import Posts from './components/Posts';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      posts: [],
      apiRoute: 'http://cms-excercise.test/wp-json/wp/v2'
    };
  }

  componentDidMount(){
     var postsEndpoint = '/posts',
         postsURL = this.state.apiRoute + postsEndpoint;

    fetch(postsURL)
        .then(res => res.json())
        .then(posts => this.setState((prevState, props) => {
            return { posts: posts.map(this.mapPost)};
        }));
  }

  mapPost(post){
    return {
      id: post.id,
      title: post.title.rendered,
      date: post.date,
      excerpt: post.excerpt,
      content: post.content.rendered
    }
  }

  render() {
    return (
      <div>
        <Navbar />
        <Header />
        <Posts renderedPosts={this.state.posts} />

        <hr />
        <Footer />
      </div>
    );
  }
}

export default App;
