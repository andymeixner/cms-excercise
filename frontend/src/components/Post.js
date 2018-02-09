import React, { Component } from 'react';
import Moment from 'react-moment';
import Posts from './Posts';
import Footer from './Footer';
import { Link } from 'react-router-dom';


class Post extends Component {
  constructor(props){
    super(props);

    this.state = {
      apiRoute: 'https://blog.veridianhomes.com/wp-json/wp/v2',
      // initially set json keys that cause conflicts with JSX reserved keywords to empty strings
      post: {
        title: {
          rendered: ''
        },
        content: {
          rendered: ''
        },
        _embedded: {
          author: [
            {
              name: ''
            }
          ]
        }
      }
    };
  }

  componentDidMount(){
     var postsEndpoint = '/posts/',
         postId = this.props.match.params.postId,
         postURL = this.state.apiRoute + postsEndpoint + postId + '?_embed';

    fetch(postURL)
      .then(res => res.json())
      .then(res => {
        this.setState({
          post: res
        })
      })
  }

  render(){
    return(
      <div>
        <header className="masthead intro-header">
          <div className="overlay"></div>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-10 mx-auto">
                <div className="post-heading">
                  <h1><div dangerouslySetInnerHTML={ {__html: this.state.post.title.rendered} } /></h1>
                    <span className="meta">Posted by
                      <span className="post-author"> { this.state.post._embedded.author[0].name}</span> on
                      <span className="post-date"> <Moment format="MMM Do, YYYY">{ this.state.post.date }</Moment></span>
                    </span>
                </div>
              </div>
            </div>
          </div>
        </header>
        <article>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-10 mx-auto">
                <div dangerouslySetInnerHTML={ {__html: this.state.post.content.rendered} } />
              </div>
            </div>
            <div className="row">
              <div className="col-lg-8 col-md-10 mx-auto">
                <button className="btn btn-secondary">
                  <Link to="/"><i className="fa fa-arrow-circle-left"></i> All Posts</Link>
                </button>
              </div>
            </div>
          </div>
        </article>
        <hr />
        <Footer />
      </div>
    );
  }
}

export default Post;
