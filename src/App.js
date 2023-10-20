import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [quotes, setQuotes] = useState({ text: '', author: '' }); // Initialize as an empty object

  const getquotes = () => {
    fetch('https://type.fit/api/quotes')
      .then((res) => res.json())
      .then((data) => {
        let randomnum = Math.floor(Math.random() * data.length);
        setQuotes(data[randomnum]);
      });
  };

  useEffect(() => {
    getquotes();
  }, []);

  return (
    <div className='App'>
      <div className='quote'>
        <p>{quotes.text}</p>
        <p>{quotes.author}</p>
      </div>
      <div className='btn-container'>
        <button className='btn' onClick={getquotes}>
          Generate a Quote!
        </button>
      </div>
    </div>
  );
}

export default App;
