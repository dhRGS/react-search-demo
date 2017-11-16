import React, { Component } from 'react';
// keyIndex is useful for adding a unique key for abs. ever element on an object
//import keyIndex from 'react-key-index';
// example use // data = keyIndex(data, 1);
// shortId is easier for simple parent-level IDs
import shortid from 'shortid';

export function handleErrors(response){
    if(!response.ok){
        throw Error(response.statusText);
    }
    return response;
}

function searchFocusHandler(){
    this.value='';
}

export default class SearchComponent extends Component {
    constructor(){
        super();
        this.state = {
            posts: []
        }
    };

    componentWillMount() {
        // called the first time the component is loaded and before it's added to the page
        // can be useful for API calls and to populate initial state
    }
    
    componentDidMount(){
        // called the after the component is rendered to the page

        //var uri = 'http://podia2016.rgsit.com/Wcf/Publish.svc/json/SearchChapters?SearchString=egg&HitCount=50';
        //$.get('http://podia2016.rgsit.com/Wcf/Publish.svc/json/SearchChapters?SearchString=egg&HitCount=50', posts => this.setState({ posts }));
        //console.log(posts);
        fetch('http://podia2016.rgsit.com/Wcf/Publish.svc/json/SearchChapters?SearchString=egg&HitCount=50')
            .then(results => {
                return results.json();
                console.log('results');
                console.log(results.json);
            }).then(data => {
                console.log(data);                
                let posts = data.map((post) => {
                    return (
                        <article key={shortid.generate()} className='well'>
                                <h1>You searched for "{post.Description}"</h1>
                                <h2>{post.SeriesDescription}</h2>
                                <p>Chapter ID: {post.ChapterId}</p>
                            </article>
                    )
                })
                this.setState({posts: posts});
            console.log("state", this.state.posts);
            }).catch(error => {
                handleErrors(error);
            })
    }

    componentWillReceiveProps(nextProps) {
        // called when the props provided to the component are changed
    }

    
    componentWillUpdate(nextProps, nextState) {
        // called when the props and/or state are changed
    }

    componentWillUnmount() {
        // called when the component is removed
    }

  render() {
    return (
        <div>
      <p>Hi from the Search Component</p>
      <div class="container-fluid">
      <div class="row marginBottom">
      <div class="col-lg-4 col-md-4">
          <form id="semanticSearchForm" class="form">
      <h2>Enter a search term...</h2>
      <div class="form-group">
          <label htmlFor="searchTerm">Search Term:</label>
          {/*<input type="text" id="searchTerm" class="form-control" onFocus="this.value=''" value="What would you like to search for?"/>*/}
          <input type="text" id="searchTerm" class="form-control" defaultValue="What would you like to search for?" onFocus='searchFocusHandler()' />
  </div>
  <div class="form-group">
      <label htmlFor="resultCount">No. of search results:</label>
      <input id="resultCount" class="form-control"  type="number" defaultValue="10" min="10" max="50" step="10"/>
  </div>
      {/*<input type="button" value="Search" onclick="searchThis()" class="btn btn-default"/>*/}
      <input type="button" value="Search" class="btn btn-default"/>

  </form>
      </div>
  </div>
      <div id="results" class="row">
          {this.state.posts}
      </div>
      </div>
      </div>
    );
  }
}

