import {combineReducers} from 'redux';
 
const songsReducer = () =>{
    return [
        { title:'no scrubs1',duration:'4:01'},
        { title:'no scrubs2',duration:'4:02'},
        { title:'no scrubs3',duration:'4:03'},
        { title:'no scrubs4',duration:'4:04'},
        { title:'no scrubs5',duration:'4:05'}
    ]
}

const selectedSongReducer = (selectedSong = null ,action) => {
    if(action.type === 'SONG_SELECTED'){
        return action.payload;
    }

    return selectedSong
}

export default combineReducers({
    songs:songsReducer,
    selectedSong:selectedSongReducer
});