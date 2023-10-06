import React, { Component } from 'react';

class Card extends Component {
    constructor (props) {
        super(props);
        this.state = {
            post: []
        }
    }
    render() {
        return (
          <div className="container">
            <div class="jumbotron">
              <h1 class="display-4">Blog posts</h1>
            </div>
            <div className="card">
              <div className="card-header">
                Featured
              </div>
              <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
        );
      }
    
}

export default Card;
