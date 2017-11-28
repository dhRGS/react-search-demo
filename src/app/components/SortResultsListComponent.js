import React, { Component } from 'react';

export default class SortResultsListComponent extends Component {
    // initialise the component
    constructor(props){
        super(props);
        this.state = {
            value: 'SeriesDescription'
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
        this.setState({
            value: e.target.value
        });
        this.props.sortData(e.target.value);
    }

    render() {
        return(
            <div className="row">
                <div className="form-horizontal">
                    <div className="form-group">
                    <label for="sortSelect" className="control-label col-md-3">Select a sort method:</label>
                        <div className="col-md-4">
                                <select className="form-control" id="sortSelect" value={this.state.value} onChange={this.handleChange}>
                                    <option value="SeriesDescription">Series Title</option>
                                    <option value="Description">Chapter Title</option>
                                    <option value="ChapterId">Chapter ID</option>
                                </select>
                        </div>
                    </div>
                </div>
            </div>
        )//return
    } //render
} //SortResultsListComponent