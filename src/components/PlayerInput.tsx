import React, { useState } from 'react';
import { Player } from '../data/players';
import { Search } from 'lucide-react';

interface PlayerInputProps {
  players: Player[];
  onGuess: (player: Player) => void;
}

export const PlayerInput: React.FC<PlayerInputProps> = ({ players, onGuess }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const player = players.find(p => p.name.toLowerCase() === input.toLowerCase());
    if (player) {
      onGuess(player);
      setInput('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative w-full max-w-md mx-auto">
      <div className="relative">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full p-3 rounded-lg bg-white text-gray-900 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent pl-10"
          placeholder="Enter player name..."
        />
        <Search className="absolute left-3 top-3.5 text-gray-400" size={20} />
      </div>
    </form>
  );
};