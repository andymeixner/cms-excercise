import React, { Component } from 'react';
import Moment from 'react-moment';
import Post from './Post';
import { Link } from 'react-router-dom';


// Render posts array
class Posts extends Component {
  render(){
    return(
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-10 mx-auto">

            {/* map post to render the link, title, and meta of each post in the array */}
            {this.props.renderedPosts.map((post) =>
              <div className="post-preview" key={`post-${post.id}}`}>
                {/* Link to post/post.id */}
                <Link to={`/post/${post.id}`}>
                  <h2 className="post-title"><div dangerouslySetInnerHTML={ {__html: post.title} } /></h2>
                  <p className="post-meta">Posted by
                    <span className="post-author"> { post.author }</span> on
                    {/* use Moment.js to format the date to a more user friendly format */}
                    <span className="post-date"> <Moment format="MMM Do, YYYY">{post.date}</Moment></span></p>
                </Link>
                <hr />
              </div>
            )} {/* end map */}
            
          </div>
        </div>
      </div>
    );
  }
}


export default Posts;
