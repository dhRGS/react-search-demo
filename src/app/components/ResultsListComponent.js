import React, { Component } from 'react';
// shortId is easier for simple parent-level IDs
import shortid from 'shortid';
// get the SearchResultItemComponent to populate our list
//import SearchResultItem from './components/SearchResultItemComponent';

export default class ResultsListComponent extends Component {
    render() {
        let posts = this.props.data;
        posts = posts.map((post) => {
          return (
              <article key={shortid.generate()} className='well'>
                      <h1>Chapter Description: {post.Description}</h1>
                      <h2>{post.SeriesDescription}</h2>
                      <p>Chapter ID: {post.ChapterId}</p>
                  </article>
          ) //return
      }) //posts.map
        return(
            <div>
                {posts}
            </div>
        ) //return
    } //render
} //ResultsList