import React, { Component } from 'react';
// shortId is easier for simple parent-level IDs
import shortid from 'shortid';
// get the SearchResultItemComponent to populate our list
import SearchResultItem from './SearchResultItemComponent';
// get the SortResultItemComponent to sort our list
import SortResultsListComponent from './SortResultsListComponent';


export default class ResultsListComponent extends Component {
    render() {
        let posts = this.props.data;
        posts = posts.map((post) => {
          return (
              <SearchResultItem key={shortid.generate()} 
              resultData={post}
              />
          ) //return
      }) //posts.map
        return(
            <div className="wrapper">
                <SortResultsListComponent 
                sortData={this.props.sortFn}
                />                
                {posts}
            </div>
        ) //return
    } //render
} //ResultsList