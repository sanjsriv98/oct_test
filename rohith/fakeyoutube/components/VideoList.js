import React, { Component } from 'react'
import Video from './Video'

export class VideoList extends Component {
    render() {
        return (
            <div className="ui relaxed divided list" >
                {this.props.videos.map(video =>{
                    return <Video key={video.etag} video={video} onVideoSelect={this.props.onVideoSelect} />
                })}
            </div>
        )
    }
}

export default VideoList