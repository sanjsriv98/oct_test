import React, { Component } from 'react'

export class VideoDesc extends Component {
    render() {
        if(!this.props.selectedVideo){
            return <div>Loading...</div>
        }
        else{
            const videoSrc = `https://www.youtube.com/embed/${this.props.selectedVideo.id.videoId}`
            return (
                <div>
                    <div className="ui embed">
                    <iframe title="video player"  src={videoSrc}  />
                    </div>
                    <div className="ui segment" >
                        <h4 className="ui header">{this.props.selectedVideo.snippet.title} </h4>
                        <p>{this.props.selectedVideo.snippet.description}</p>
                    </div>
                
                </div>
            )
        }
        
    }
}

export default VideoDesc
