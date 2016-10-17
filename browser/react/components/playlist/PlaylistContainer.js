import {connect} from 'react-redux';
// import playlist from './playlist';
import higherOrderPlaylist from './higherOrderPlaylist';
import {logPlaylist} from '../../ducks/playlist';

const mapStateToProps = () => ({

})

const mapDispatchToProps = (dispatch) => ({
  logPlaylistName: (playlist) => ( dispatch(logPlaylist(playlist)) )
})

const PlaylistContainer = connect(mapStateToProps,mapDispatchToProps)(higherOrderPlaylist);

export default PlaylistContainer;
