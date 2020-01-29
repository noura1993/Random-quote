import React from 'react';
import './App.css'
import Quote from '../Quote/Quote';
import QuoteApi from '../../QuoteApi/QuoteApi';

const colors = ['#2e0505', '#994c04', '#eccc14', '#a6e415', '#478a6a', '#62ce9a', '#2bc9ae', '#1a3d37', '#083341', '#437485', '#464285',
   '#643d96', '#5b0a66', '#58385c', '#7e1c60', '#38152e', '#c9196b', '#5f002d', '#da1741', '#8d0303'];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: '',
      quote: '',
      author: ''
    }

    this.randomQuote = this.randomQuote.bind(this);
  }
 

  randomQuote() {
    QuoteApi.getRandomQuote().then( randomQuoteWithAuthor => {
      let color = colors[Math.floor(Math.random()*colors.length)];
      document.body.style.background = color;
      this.setState({
        color: color,
        quote: randomQuoteWithAuthor.quote,
        author: randomQuoteWithAuthor.author
      })
    })
  }

  componentDidMount() {
   this.randomQuote();
  }

  render() {
    return (
      <div className="App">
        <Quote quote={this.state.quote} author={this.state.author}  color={this.state.color} randomQuote={this.randomQuote}/>
      </div>
    );
  }
}

export default App;
