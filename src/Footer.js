import React, { Component } from 'react';

class Footer extends Component {
    remainingCount() {
        if (this.props.gameState !== 'recall') { return null; }
        return (
            <div className="remaining-count">
                {this.props.activeCellsCount - this.props.correctGuesses.length}
            </div>
        );
    }
    
    playAgainButton() {
        if (['won', 'lost'].includes(this.props.gameState)) {
            return (
                <button className="play-again-button"
                        onClick={this.props.playAgain}>
                    Play Again
                </button>
            );
        }
    }
    
    render() {
        return (
            <div className="footer">
                <div className="hint">
                    {this.props.hints[this.props.gameState]}...
                </div>
                {this.remainingCount()}
                {this.playAgainButton()}
            </div>
        );
    }
}

Footer.defaultProps = {
    hints: {
        ready: 'Get Ready',
        memorize: 'Memorize',
        recall: 'Recall',
        won: 'Well Played',
        lost: 'Game Over',
    },
};

export default Footer;
