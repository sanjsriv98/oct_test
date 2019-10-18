import React, { Component } from 'react'
import './Video.css'

export class Video extends Component {
    render() {
        return (
            <div className="video-item item" onClick={() => this.props.onVideoSelect(this.props.video)}>
                <img className="ui image" alt='img' src={this.props.video.snippet.thumbnails.medium.url} />
                <div className="content">
                    <div className="header">{this.props.video.snippet.title}</div>
                </div>
                
            </div>
        )
    }
}

export default Video
