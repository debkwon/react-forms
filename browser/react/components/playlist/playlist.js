import React from 'react'

export default class Playlist extends React.Component{
  render(){
    return(
      <div>
        <h1>New Playlist</h1>
        <form>
          <div className='form-group'>
            <label>Title</label>
            <input type='text' name='playlist' className='form-control input-sm'
              ref = {(domNode) => {
                this.addPlaylist = domNode;
              }}
            />
            <div>
              {console.log(this.props, "this.props")}
              <button type='submit' className="btn btn-default"
                onClick = { (evt) => {
                  evt.preventDefault();
                 this.playlistLogger(this.addPlaylist.value)
                }}
              >Submit</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}
