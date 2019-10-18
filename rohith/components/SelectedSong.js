import React, { Component } from 'react'
import { connect } from 'react-redux'


export class SelectedSong extends Component {
    render() {
        if(this.props.selectedSong !== null){
            return(
                <div>
                    {this.props.selectedSong.title}
                </div>
            )
        }
        else{
            return <div>Select a song</div>
        }
    }
}

const mapStateToProps = (state)=>{ 
    return {selectedSong : state.selectedSong}
}   

export default connect(mapStateToProps)(SelectedSong)
