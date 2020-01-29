import React from 'react';
import './Quote.css';

class Quote extends React.Component {
    constructor(props) {
        super(props);
    
        this.randomQuote = this.randomQuote.bind(this);

    }

    randomQuote() {
        this.props.randomQuote();
    }

    render() {
        return(
            <div className='wrapper'>
                <div id='quote-box'>
                    <div className='quote-text'>
                    <span id='quote' style={{ color: this.props.color }}>“{this.props.quote}”</span>
                    </div>
                    <div className='quote-author'>         
                    <span id='author' style={{ color: this.props.color }}>-&nbsp;{this.props.author}</span>
                    </div>
                    <div className='button'>
                    <button className='new' id='button' onClick={this.randomQuote} style={{ backgroundColor: this.props.color }}>New quote</button>
                </div>
                </div>
            </div>
        );
    }
}

export default Quote;