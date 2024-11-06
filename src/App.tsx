import React, { useState, useEffect } from 'react';
import { players, Player } from './data/players';
import { GuessRow } from './components/GuessRow';
import { PlayerInput } from './components/PlayerInput';
import { Trophy, Gamepad2 } from 'lucide-react';

function App() {
  const [answer, setAnswer] = useState<Player | null>(null);
  const [guesses, setGuesses] = useState<Player[]>([]);
  const [won, setWon] = useState(false);
  const [remainingPlayers, setRemainingPlayers] = useState<Player[]>(players);

  useEffect(() => {
    const randomPlayer = players[Math.floor(Math.random() * players.length)];
    setAnswer(randomPlayer);
  }, []);

  const handleGuess = (player: Player) => {
    if (won || !answer) return;

    const newGuesses = [...guesses, player];
    setGuesses(newGuesses);
    setRemainingPlayers(remainingPlayers.filter(p => p.name !== player.name));

    if (player.name === answer.name) {
      setWon(true);
    }
  };

  const resetGame = () => {
    const randomPlayer = players[Math.floor(Math.random() * players.length)];
    setAnswer(randomPlayer);
    setGuesses([]);
    setWon(false);
    setRemainingPlayers(players);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-purple-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-2 flex items-center justify-center gap-2">
              <Gamepad2 className="text-yellow-400" />
              Turkish LoL Player Guesser
              <Gamepad2 className="text-yellow-400" />
            </h1>
            <p className="text-gray-300">Guess the Turkish League of Legends player!</p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 mb-6">
            {!won && <PlayerInput players={remainingPlayers} onGuess={handleGuess} />}

            <div className="mt-6">
              {guesses.length > 0 && (
                <div className="grid grid-cols-5 gap-2 mb-4 text-sm">
                  <div className="p-2 text-center font-bold text-yellow-400">NAME</div>
                  <div className="p-2 text-center font-bold text-yellow-400">TEAM</div>
                  <div className="p-2 text-center font-bold text-yellow-400">ROLE</div>
                  <div className="p-2 text-center font-bold text-yellow-400">AGE</div>
                  <div className="p-2 text-center font-bold text-yellow-400">COUNTRY</div>
                </div>
              )}

              <div className="space-y-2">
                {guesses.map((guess, index) => (
                  <GuessRow key={index} guess={guess} answer={answer!} />
                ))}
              </div>
            </div>

            {won && (
              <div className="text-center mt-6">
                <div className="flex items-center justify-center gap-2 text-2xl font-bold text-yellow-400 mb-4">
                  <Trophy />
                  Congratulations! You won in {guesses.length} guesses!
                  <Trophy />
                </div>
                <button
                  onClick={resetGame}
                  className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-lg transition-colors"
                >
                  Play Again
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;