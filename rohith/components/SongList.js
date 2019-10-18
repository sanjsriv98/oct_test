import React, { Component } from 'react'
import SongItem from './SongItem'
import { connect } from 'react-redux'

export class SongList extends Component {
    render() {
        return (
            <div className='ui divided list'>
                {this.props.songs.map((song)=>{
                return <SongItem key={song.title} song={song} />
                })}
            </div>
                
            
        )
    }
}
const mapStateToProps = (state)=>{
    
    return {songs : state.songs}
}   

export default connect(mapStateToProps)(SongList)
