import React from 'react';
import Playlist from './playlist';

const higherOrderPlaylist = (Playlist) => (
  return class playlistWrapper extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        playlistInput: ''
      }
    }

    //does something
    playlistLogger(newPlaylist) {
       this.setState({
        playlistInput: newPlaylist
      })
       console.log(newPlaylist);
    }

    render(){
      return (
        <Playlist playlistLogger={this.playlistLogger} />
      )
    }

  }
)

