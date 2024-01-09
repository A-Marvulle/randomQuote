import {useEffect, useState} from "react"
import './App.css';

function App() {
  const [quoteInfo, setQuoteInfo] = useState({})
  useEffect(() => {
    getQuote();
  },[])

  const getQuote = () =>{
    fetch('https://api.quotable.io/random')
      .then((response) => {
        return response.json();
      })
      .then((data) =>{
        setQuoteInfo({
          text: data.content,
          author: data.author
        })
      })
  }
  return (
      <div id="quote-box">
        <p id="text" className="quote-text">{quoteInfo.text}</p>
        <p id="author" className="quote-author">{quoteInfo.author}</p>
        <div className="buttons">
          <button id="new-quote" className="button" onClick={getQuote}>New Quote</button>
          <a href={'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + quoteInfo.text + quoteInfo.author} id="tweet-quote" target="_blank"><i class="fa fa-twitter"></i></a>
          <a href={'https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=' + quoteInfo.text + quoteInfo.author} id="tumblr-quote" target="_blank"><i class="fa fa-tumblr"></i></a>
        </div>
       
      </div>
  
  );
}

export default App;
