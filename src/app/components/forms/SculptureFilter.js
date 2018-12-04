import React, { Component } from 'react';

class GalleryFilter extends Component {
    render() {
        return (
        <form className={this.props.currentSelected}>

        <div className="form-check">
        <label id="sculpture">
            <input
            className="form-check-input"
            type="radio"
            name="works"
            value="all"
            checked={this.props.currentSelected === "all"}
            onChange={this.props.handleChange}
            />
            <small>all</small>
        </label>
        </div>
        <div className="form-check">
        <label className="subCategory" id="abstract">
            <input
            className="form-check-input"
            type="radio"
            name="works"
            value="abstract"
            checked={this.props.currentSelected === "abstract"}
            onChange={this.props.handleChange}
            />
            <small>abstract</small>
        </label>
        </div>
        <div className="form-check">
        <label className="subCategory" id="wildlife">
            <input
            className="form-check-input"
            type="radio"
            name="works"
            value="wildlife"
            checked={this.props.currentSelected === "wildlife"}
            onChange={this.props.handleChange}
            />
            <small>wildlife</small>
        </label>
        </div>
        <div className="form-check">
        <label className="subCategory" id="portrait">
            <input
            className="form-check-input"
            type="radio"
            name="works"
            value="portrait"
            checked={this.props.currentSelected === "portrait"}
            onChange={this.props.handleChange}
            />
            <small>portrait</small>
        </label>
        </div>
        <div className="form-check">
        <label className="subCategory" id="figure">
            <input
            className="form-check-input"
            type="radio"
            name="works"
            value="figure"
            checked={this.props.currentSelected === "figure"}
            onChange={this.props.handleChange}
            />
            <small>figures</small>
        </label>
        </div>
        </form>
        );
    }
}

export default GalleryFilter;

