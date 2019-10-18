import React, { Component } from 'react'
import SearchBar from './components/SearchBar'
import youtube from './apis/youtube'
import VideoList from './components/VideoList'
import VideoDesc from './components/VideoDesc'

export class App extends Component {

  state={
    videos:[],
    selectedVideo:null
  }
  componentDidMount(){
    this.setSearch('blackpink')
  }
  setSearch = async (text) =>{
    const response = await youtube.get('/search',{
      params:{
        q:text,
      }
    })

    console.log(response.data.items)
    this.setState({videos:response.data.items,selectedVideo:response.data.items[0]});
    
  }
  onVideoSelect=(video)=>{
    this.setState({selectedVideo:video})
  }

  render() {
    return (
      <div className="ui container" >
        <SearchBar search={this.setSearch}/>
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDesc selectedVideo={this.state.selectedVideo}/>
            </div>
            <div className="five wide column">
              <VideoList 
                videos={this.state.videos} 
                onVideoSelect={this.onVideoSelect}
              />
            </div>
          </div>
        </div>
      </div>
      
    )
  }
}

export default App
