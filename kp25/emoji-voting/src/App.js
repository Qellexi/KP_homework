import React, { useState, useEffect } from 'react';

const emojis = [
  { id: 1, emoji: "😃", name: "Happy", votes: 0 },
  { id: 2, emoji: "😊", name: "Blush", votes: 0 },
  { id: 3, emoji: "😎", name: "Cool", votes: 0 },
  { id: 4, emoji: "😍", name: "Love", votes: 0 },
  { id: 5, emoji: "😘", name: "Kiss", votes: 0 },
];

function App() {
  const [emojiVotes, setEmojiVotes] = useState(() => {
    const savedVotes = localStorage.getItem('emojiVotes');
    return savedVotes ? JSON.parse(savedVotes) : emojis;
  });

  const [winner, setWinner] = useState(null);

  useEffect(() => {
    localStorage.setItem('emojiVotes', JSON.stringify(emojiVotes));
  }, [emojiVotes]);

  const handleVote = (id) => {
    const updatedVotes = emojiVotes.map(emoji =>
        emoji.id === id ? { ...emoji, votes: emoji.votes + 1 } : emoji
    );
    setEmojiVotes(updatedVotes);
  };

  const handleShowResults = () => {
    const maxVotes = Math.max(...emojiVotes.map(emoji => emoji.votes));
    const winningEmoji = emojiVotes.find(emoji => emoji.votes === maxVotes);
    setWinner(winningEmoji);
  };

  const handleClearResults = () => {
    setEmojiVotes(emojis);
    setWinner(null);
    localStorage.removeItem('emojiVotes');
  };

  return (
      <div className="App">
        <h1>Голосування за найкращий смайлик</h1>
        <div className="emoji-list">
          {emojiVotes.map(emoji => (
              <div key={emoji.id} className="emoji-item" onClick={() => handleVote(emoji.id)}>
                <span className="emoji">{emoji.emoji}</span>
                <span className="votes">{emoji.votes}</span>
              </div>
          ))}
        </div>
        <button className="btn btn-success" onClick={handleShowResults}>Show Results</button>
        {winner && (
            <div className="results">
              <h2>Результати голосування:</h2>
              <p>Переможець:</p>
              <span className="emoji">{winner.emoji}</span>
              <p>Кількість голосів: {winner.votes}</p>
            </div>
        )}
        <button className="btn btn-danger" onClick={handleClearResults}>Очистити результати</button>
      </div>
  );
}

export default App;
