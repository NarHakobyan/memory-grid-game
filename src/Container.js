import React, { Component } from 'react';

import Game from './Game';

class Container extends Component {
    handleChangeRows = (e) => {
        let value = e.target.value;
        this.setState({ rows: value });
    };
    validateRows = () => {
        let value = this.state.rows;
        if (value < 5) {
            value = 5;
            alert('minimum is 5 rows');
        }
        this.setState({ rows: value });
    };
    validateColumns = () => {
        let value = this.state.columns;
        if (value < 5) {
            value = 5;
            alert('minimum is 5 columns');
        }
        this.setState({ columns: value });
    };
    handleChangeColumns = (e) => {
        let value = e.target.value;
        this.setState({ columns: value });
    };
    validateActiveCells = () => {
        let value = this.state.activeCellsCount;
        if (value < 6) {
            value = 6;
            alert('minimum is 6 cells');
        }
        if (value >= this.state.rows * this.state.columns) {
            value = 6;
            alert('cells value is not valid');
        }
        this.setState({ activeCellsCount: value });
    };
    handleChangeActiveCellsCount = (e) => {
        let value = e.target.value;
        this.setState({ activeCellsCount: value });
    };
    createNewGame = () => {
        this.setState({ gameId: this.state.gameId + 1 });
    };
    
    constructor(props) {
        super(props);
        this.state = { gameId: null, rows: 5, columns: 5, activeCellsCount: 6 };
    }
    
    render() {
        return (
            <div className="container">
                
                <div className="row">
                    <div className="col-lg-6">
                        <div className="input-group m-3">
                            <span className="input-group-btn">
                                <span className="input-group-addon" id="sizing-addon1">Number of rows</span>
                            </span>
                            <input type="text" value={this.state.rows} className="form-control m"
                                   onChange={this.handleChangeRows} onBlur={this.validateRows}/>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="input-group m-3">
                            <span className="input-group-btn">
                                <span className="input-group-addon" id="sizing-addon1">Number of columns</span>
                            </span>
                            <input type="text"
                                   value={this.state.columns}
                                   className="form-control m"
                                   onChange={this.handleChangeColumns}
                                   onBlur={this.validateColumns}/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-offset-3 col-lg-6">
                        <div className="input-group m-3">
                            <span className="input-group-btn">
                                <span className="input-group-addon" id="sizing-addon1">Number of active cells</span>
                            </span>
                            <input type="text" value={this.state.activeCellsCount} className="form-control m"
                                   placeholder="Number of Cells count"
                                   onChange={this.handleChangeActiveCellsCount}
                                   onBlur={this.validateActiveCells}/>
                        </div>
                    </div>
                    <div className="col-lg-offset-3 col-lg-6">
                        <div className="input-group m-3">
                            <button onClick={this.createNewGame} className="btn btn-primary btn-lg btn-block">Go</button>
                        </div>
                    </div>
                </div>
                {this.state.gameId ? <Game key={this.state.gameId}
                                           createNewGame={this.createNewGame}
                                           rows={this.state.rows} columns={this.state.columns}
                                           activeCellsCount={this.state.activeCellsCount}/> : undefined}
            </div>
        );
    }
}

export default Container;
