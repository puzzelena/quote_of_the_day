import React, { useState } from "react";
import ReactDOM from "react-dom";

const Quote = ({ title, quote, numVotes }) => (
  <>
    <h1>{title}</h1>
    <div>{quote}</div>
    <div>Has {numVotes} votes</div>
  </>
);

const App = ({ quotes }) => {
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState({
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
  });

  const mostVoted = Object.keys(votes).sort((a, b) => votes[b] - votes[a])[0];

  const getRandomIndex = () => Math.floor(Math.random() * quotes.length);

  const handleNextQuote = () => {
    let idx = getRandomIndex();
    while (idx === selected) {
      idx = getRandomIndex();
    }
    setSelected(idx);
  };

  const addVote = () => {
    setVotes({
      ...votes,
      [selected]: votes[selected] + 1,
    });
  };

  return (
    <>
      <Quote
        title={"Quote of the day"}
        quote={quotes[selected]}
        numVotes={votes[selected]}
      />
      <button onClick={handleNextQuote}>Next quote</button>
      <button onClick={addVote}>Vote</button>
      <Quote
        title={"Quote with most votes"}
        quote={quotes[mostVoted]}
        numVotes={votes[mostVoted]}
      />
    </>
  );
};

const quotes = [
  "Talk is cheap. Show me the code.",
  "Programs must be written for people to read, and only incidentally for machines to execute.",
  "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "I'm not a great programmer; I'm just a good programmer with great habits.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

ReactDOM.render(<App quotes={quotes} />, document.getElementById("root"));