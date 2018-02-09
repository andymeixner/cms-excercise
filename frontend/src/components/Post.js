import React, { Component } from 'react';
import Moment from 'react-moment';
import Posts from './Posts';


class Post extends Component {
  constructor(props){
    super(props);

    this.state = {
      apiRoute: 'http://cms-exercise.test/wp-json/wp/v2',
      post: '',

      // initially set json keys that cause conflicts with react reserved keywords to empty strings
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
          </div>
        </article>

      </div>
    );
  }
}

export default Post;
