'use strict';

import React from 'react';
import { Link } from 'react-router';

export default class Artists extends React.Component {
  constructor(){
    super();
    this.state = {
      artistInput: '' //this is the default value for artist search
    }
  }
render(){
  const artists = this.props.artists;
  return (
    <div>
      <h3>Artists</h3>
       <input type='text'
          onChange={ () => { //this is our event
            this.setState({
              artistInput: this.artistSearch.value //event.target.value
            });
          }}
          ref={ (domNode) => {
            this.artistSearch = domNode;
          }}
      />
      <p>{this.state.artistInput}</p>
      <div className="list-group">
        {
          artists.map(artist => (
            <div className="list-group-item" key={ artist.id }>
              <Link to={`/artists/${artist.id}`}>
                { artist.name }
              </Link>
            </div>
          ))
        }
      </div>
    </div>
  );
}
}
