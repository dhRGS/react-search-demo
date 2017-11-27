import React, { Component } from 'react';
// shortId is easier for simple parent-level IDs
import shortid from 'shortid';

// bootstrap 
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import $ from 'jquery';
import '../../node_modules/bootstrap/dist/js/bootstrap.js';
// components
import Header from './components/Header';
import Navbar from './components/Navbar';
import ResultsListComponent from './components/ResultsListComponent';
import SearchComponent from './components/Search-Component';
// // assets 
// import logo from './logo.svg';
import './css/styles.scss';

export default class App extends Component {
    constructor(props, context){
        super(props, context);
        this.state = {
          brand: 'Podia',
          searchVisibility: false,
          searchPlaceholder: 'What would you like to search for?',
          data: [
            // {"ChapterId":2,"Description":"1","Rank":944,"SeriesDescription":"Test"},
            // {"ChapterId":121,"Description":"Eggs","Rank":944,"SeriesDescription":"Streaming Wizard"},
            // {"ChapterId":123,"Description":"test1","Rank":944,"SeriesDescription":"Creator Test"},
            // {"ChapterId":124,"Description":"test2","Rank":944,"SeriesDescription":"Creator Test"},
            // {"ChapterId":125,"Description":"test3","Rank":944,"SeriesDescription":"Creator Test"},
            // {"ChapterId":131,"Description":"Eggs","Rank":944,"SeriesDescription":"Immaculate"},
            // {"ChapterId":135,"Description":"4","Rank":944,"SeriesDescription":"Creator Test"},
            // {"ChapterId":136,"Description":"5","Rank":944,"SeriesDescription":"Creator Test"},
            // {"ChapterId":150,"Description":"Eggs","Rank":944,"SeriesDescription":"Andy Dean"},
            // {"ChapterId":501,"Description":"Creator Version","Rank":944,"SeriesDescription":"Test"},
            // {"ChapterId":295,"Description":"Test","Rank":944,"SeriesDescription":"VMC"},
            // {"ChapterId":314,"Description":"Cptr1","Rank":904,"SeriesDescription":"Bob egg practice"},
            // {"ChapterId":153,"Description":"tesr","Rank":901,"SeriesDescription":"Studio test"},
            // {"ChapterId":1760,"Description":"Session 8","Rank":786,"SeriesDescription":"Matrix"},
            // {"ChapterId":1761,"Description":"Session 11","Rank":628,"SeriesDescription":"Matrix"},
            // {"ChapterId":1762,"Description":"Session 1","Rank":530,"SeriesDescription":"Matrix"},
            // {"ChapterId":1763,"Description":"Session 2","Rank":530,"SeriesDescription":"Matrix"},
            // {"ChapterId":2186,"Description":"Pensions Issues","Rank":67,"SeriesDescription":"LN Search Demo"}
          ]
    } //state
    this.toggleSearch = this.toggleSearch.bind(this);
    this.searchSemantic = this.searchSemantic.bind(this);
  } //constructor

  toggleSearch() {
    let tempVisibility = !this.state.searchVisibility;
    this.setState({
      searchVisibility: tempVisibility
    });
}
searchSemantic(tempItem) {
  //console.log('searchSemantic triggered');
  //console.log(tempItem);
  let semanticURL = 'http://podia2016.rgsit.com/Wcf/Publish.svc/json/SearchChapters?SearchString=' + tempItem.searchTerm + '&HitCount=' + tempItem.hitNumber;
  // get biz
  fetch(semanticURL)
            .then(results => {
                return results.json();
                //console.log('results');
                //console.log(results.json);
            }).then(data => {
              //console.log('data from then');
                //console.log(data);                
                this.setState({data: data});
            }).catch(error => {
                handleErrors(error);
            })
}

  render() {
    const hasData = this.state.data.length > 0;
    return (
      <div className="container-fluid">
        <Navbar
            brandTitle={this.state.brand} />
            <div id="sidebar" className="col-md-4">
        <SearchComponent
            searchPlaceholder={this.state.searchPlaceholder}
            searchVisible={this.state.searchVisibility}
            handleSearchToggle={this.toggleSearch}
            doSearch={this.searchSemantic} />
              </div>
        <main className="col-md-8">
        <Header />
        {hasData ? (
          <ResultsListComponent
          data={this.state.data} />
      ) : (
        <h3>Sorry, your search returned no results</h3>
      )}     
            </main>
      </div>
    );
  }
}

//export default App;
