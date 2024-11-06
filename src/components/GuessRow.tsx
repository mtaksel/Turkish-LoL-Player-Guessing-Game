import React from 'react';
import { Player } from '../data/players';
import { CheckCircle2, XCircle, ArrowUp, ArrowDown } from 'lucide-react';

interface GuessRowProps {
  guess: Player;
  answer: Player;
}

export const GuessRow: React.FC<GuessRowProps> = ({ guess, answer }) => {
  const isMatch = (field: keyof Player) => guess[field] === answer[field];

  const getAgeIndicator = () => {
    if (guess.age === answer.age) return <CheckCircle2 className="text-white" size={16} />;
    return guess.age < answer.age ? <ArrowUp className="text-white" size={16} /> : <ArrowDown className="text-white" size={16} />;
  };

  const getFlagUrl = (countryCode: string) => {
    return `https://flagcdn.com/24x18/${countryCode.toLowerCase()}.png`;
  };

  return (
    <div className="grid grid-cols-5 gap-2 mb-2 text-sm">
      <div className={`p-2 rounded ${isMatch('name') ? 'bg-green-500' : 'bg-red-500'} text-white flex items-center justify-between shadow-lg`}>
        <span className="font-medium text-center flex-grow">{guess.name}</span>
        {isMatch('name') ? <CheckCircle2 className="text-white" size={16} /> : <XCircle className="text-white" size={16} />}
      </div>
      <div className={`p-2 rounded ${isMatch('team') ? 'bg-green-500' : 'bg-red-500'} text-white flex items-center justify-between shadow-lg`}>
        <span className="font-medium text-center flex-grow">{guess.team}</span>
        {isMatch('team') ? <CheckCircle2 className="text-white" size={16} /> : <XCircle className="text-white" size={16} />}
      </div>
      <div className={`p-2 rounded ${isMatch('role') ? 'bg-green-500' : 'bg-red-500'} text-white flex items-center justify-between shadow-lg`}>
        <span className="font-medium text-center flex-grow">{guess.role}</span>
        {isMatch('role') ? <CheckCircle2 className="text-white" size={16} /> : <XCircle className="text-white" size={16} />}
      </div>
      <div className={`p-2 rounded ${isMatch('age') ? 'bg-green-500' : 'bg-red-500'} text-white flex items-center justify-between shadow-lg`}>
        <span className="font-medium text-center flex-grow">{guess.age}</span>
        {getAgeIndicator()}
      </div>
      <div className={`p-2 rounded ${isMatch('country') ? 'bg-green-500' : 'bg-red-500'} text-white flex items-center justify-between shadow-lg`}>
        <div className="flex items-center justify-center gap-2 flex-grow">
          <img 
            src={getFlagUrl(guess.countryCode)} 
            alt={guess.country}
            className="w-6 h-4 object-cover rounded-sm"
          />
          <span className="font-medium">{guess.country}</span>
        </div>
        {isMatch('country') ? <CheckCircle2 className="text-white" size={16} /> : <XCircle className="text-white" size={16} />}
      </div>
    </div>
  );
};