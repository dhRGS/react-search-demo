import React, { Component } from 'react';
// shortId is easier for simple parent-level IDs
import shortid from 'shortid';

export default class SearchResultItemComponent extends Component {
    render() {
          return (
              <article className='well'>
                      <h1>Chapter Description: {this.props.resultData.Description}</h1>
                      <h2>{this.props.resultData.SeriesDescription}</h2>
                      <p>Chapter ID: {this.props.resultData.ChapterId}</p>
                  </article>
          ) //return
      } //render
} //SearchResultItemComponent