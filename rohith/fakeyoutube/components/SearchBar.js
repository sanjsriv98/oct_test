import React, { Component } from 'react'

export class SearchBar extends Component {
    state={
        search:''
    }
    submit=(e)=>{
        e.preventDefault();
        this.props.search(this.state.search)
    }
    
    change=(event)=>{
        
        this.setState({ search: event.target.value })
    }
    render() {
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.submit} >
                    <div className="field" >
                        <label>Video Search</label>
                        <input type='text' value={this.state.search} onChange={this.change} />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar
