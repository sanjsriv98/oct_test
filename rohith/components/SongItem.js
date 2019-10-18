import React, { Component } from 'react'
import {selectsong} from './../actions'
import { connect } from 'react-redux'

export class SongItem extends Component {
    render() {
        return (
            <div className="item" >
                <div className="right floated content">
                    <button className="ui button primary" onClick={this.props.selectsong.bind(this,this.props.song)}>Select</button>
                </div>
                {this.props.song.title}
                <br />
                {this.props.song.duration}
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    
    return {songs : state.songs}
}   

export default connect(mapStateToProps,{selectsong})(SongItem)

