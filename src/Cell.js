import React, { Component } from 'react';

class Cell extends Component {
    active() {
        return this.props.activeCells.includes(this.props.id);
    }
    
    handleClick() {
        if (this.guessState() === undefined && this.props.gameState === 'recall') {
            this.props.recordGuess({
                cellId: this.props.id,
                userGuessIsCorrect: this.active(),
            });
        }
    }
    
    guessState() {
        if (this.props.correctGuesses.includes(this.props.id)) {
            return true;
        } else if (this.props.wrongGuesses.includes(this.props.id)) {
            return false;
        }
    }
    
    render() {
        let className = 'cell';
        if (this.props.showActiveCells && this.active()) {
            className += ' active';
        }
        if (this.guessState() !== undefined) className += ' animate guess-' + this.guessState();
        
        return (
            <div className={className} onClick={this.handleClick.bind(this)}>
            </div>
        );
    }
}

export default Cell;
