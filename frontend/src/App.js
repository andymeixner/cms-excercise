import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Posts from './components/Posts';


class App extends Component {
  // Set initial state
  constructor(props){
    super(props);

    this.state = {
      posts: [],
      apiRoute: 'http://cms-exercise.test/wp-json/wp/v2'
    };
  }

  componentDidMount(){
    // Once component mounted - fetch the posts from the Wordpress REST Api
    var postsEndpoint = '/posts?per_page=100&_embed',
        postsURL = this.state.apiRoute + postsEndpoint;

    fetch(postsURL)
      .then(res => res.json())
      // Set state to returned posts array (mapped)
      .then(posts => this.setState((prevState, props) => {
          return { posts: posts.map(this.mapPost)};
      }));
  }

  // map post function to pull relevent data out of the returned posts array
  // called in componentDidMount
  mapPost(post){
    return {
      id: post.id,
      title: post.title.rendered,
      author: post._embedded.author[0].name,
      date: post.date,
      excerpt: post.excerpt.rendered,
      content: post.content.rendered
    }
  }

  // Render Header, Posts (passing the posts array prop), and Footer
  render() {
    return (
      <div>
        <Header />
        <Posts renderedPosts={this.state.posts} />

        <hr />
        <Footer />
      </div>
    );
  }
}

export default App;
