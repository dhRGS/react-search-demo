import React, { Component } from 'react';
// keyIndex is useful for adding a unique key for abs. ever element on an object
//import keyIndex from 'react-key-index';
// example use // data = keyIndex(data, 1);
// shortId is easier for simple parent-level IDs
import shortid from 'shortid';

// export function handleErrors(response){
//     if(!response.ok){
//         throw Error(response.statusText);
//     }
//     return response;
// }

function searchFocusHandler(){
    //this.value='';
}

export default class SearchComponent extends Component {
    constructor(){
        super();
        this.toggleSearchDisplay = this.toggleSearchDisplay.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    };

    toggleSearchDisplay() {
        this.props.handleSearchToggle();
    }

    handleSearch(e) {
        console.log('handleSearch triggered');
        let tempItem = {
            searchTerm: this.refs.searchInput.value,
            hitNumber: this.refs.hitNumber.value
        }
        //this.props.handleSearchToggle();
        e.preventDefault();
        this.props.doSearch(tempItem);
    }

    componentWillMount() {
        // called the first time the component is loaded and before it's added to the page
        // can be useful for API calls and to populate initial state
    }
    
    componentDidMount(){
        // // called the after the component is rendered to the page

        // //var uri = 'http://podia2016.rgsit.com/Wcf/Publish.svc/json/SearchChapters?SearchString=egg&HitCount=50';
        // //$.get('http://podia2016.rgsit.com/Wcf/Publish.svc/json/SearchChapters?SearchString=egg&HitCount=50', posts => this.setState({ posts }));
        // //console.log(posts);
        // fetch('http://podia2016.rgsit.com/Wcf/Publish.svc/json/SearchChapters?SearchString=egg&HitCount=50')
        //     .then(results => {
        //         return results.json();
        //         console.log('results');
        //         console.log(results.json);
        //     }).then(data => {
        //         console.log(data);                
        //         let posts = data.map((post) => {
        //             return (
        //                 <article key={shortid.generate()} className='well'>
        //                         <h1>You searched for "{post.Description}"</h1>
        //                         <h2>{post.SeriesDescription}</h2>
        //                         <p>Chapter ID: {post.ChapterId}</p>
        //                     </article>
        //             )
        //         })
        //         this.setState({posts: posts});
        //     console.log("state", this.state.posts);
        //     }).catch(error => {
        //         handleErrors(error);
        //     })
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
      let displaySearch = {
          display: this.props.searchVisible ? 'block' : 'none'
      };

    return (
        <div className="panel panel-danger">
        <div className="panel-heading" onClick={this.toggleSearchDisplay}>
        <i className="glyphicon glyphicon-search"></i>
           <h3>Run Semantic Search</h3>
      </div>
      <div className="panel-body"  style={displaySearch}>
      <div className="row marginBottom">
      <div className="container-fluid">
      <h3>Enter a search term...</h3>
          <form id="semanticSearchForm" className="form" onSubmit={ this.handleSearch }>
      <div className="form-group">
          <label htmlFor="searchTerm">Search Term:</label>
          <input type="text" id="searchTerm" className="form-control" ref="searchInput" placeholder={this.props.searchPlaceholder} onFocus={searchFocusHandler} />
  </div>
  <div className="form-group">
      <label htmlFor="resultCount">No. of search results:</label>
      <input id="resultCount" className="form-control" ref="hitNumber" type="number" defaultValue="10" min="10" max="50" step="10"/>
  </div>
      <input type="button" type="submit" value="Search" className="btn btn-default"/>

  </form>
      </div>
  </div>
    
      </div>
      </div>
    );
  }
}

