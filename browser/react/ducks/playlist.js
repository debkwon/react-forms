//this is where our playlist action type const(s) will live
//define action creators here as needed

export const LOG_PLAYLIST = 'LOG_PLAYLIST';

export const logPlaylist = (singlePlaylist) => ({
  type: LOG_PLAYLIST,
  singlePlaylist
})

export const newPlaylistReducer = (state = '', action) => {
    switch (action.type){
      case LOG_PLAYLIST: {
        console.log(action.singlePlaylist)
        return action.singlePlaylist
      }
      default: return state;
    }
}
