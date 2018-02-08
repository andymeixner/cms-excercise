import React, { Component } from 'react';

class Header extends Component {
  render(){
    return(
      <div>
        <header className="masthead intro-header">
          <div className="overlay"></div>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-10 mx-auto">
                <div className="site-heading">
                  <h1>CMS Excercise</h1>
                  <span className="subheading">A Gif Heavy Blog</span>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default Header;
