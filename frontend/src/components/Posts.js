import React, { Component } from 'react';
import Moment from 'react-moment';

class Posts extends Component {
  render(){
    return(
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-10 mx-auto">
            {this.props.renderedPosts.map((post) =>
              <div className="post-preview" key={`post-${post.id}}`}>
                <a href="post.html">
                  <h2 className="post-title">{ post.title }</h2>
                  <h3 className="post-subtitle">Lorem Ipsum</h3>
                  <p className="post-meta">Posted by
                    <span className="post-author"> { post.author }</span> on
                    <span className="post-date"> <Moment format="MMM Do, YYYY">{post.date}</Moment></span></p>
                </a>
                <hr />
                <div dangerouslySetInnerHTML={ {__html: post.content} } />
              </div>

            )}
            <div className="clearfix">
              <a className="btn btn-primary float-right" href="#">Older Posts &rarr;</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Posts;
