
import { useState } from 'react';
import './App.css';

const responses = {
  normal: ['Oui.', 'Pas.'],
  yolo: ['Grave ouais !', 'Oublie, frère.'],
  sage: ['C’est raisonnable.', 'Je te le déconseille.'],
  maman: ['Oui mon chéri(e).', 'Non, tu vas te faire mal.']
};

function App() {
  const [answer, setAnswer] = useState('');
  const [mode, setMode] = useState('normal');
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    setAnswer('');
    setTimeout(() => {
      const options = responses[mode];
      const result = options[Math.floor(Math.random() * options.length)];
      setAnswer(result);
      setLoading(false);
    }, 600);
  };

  return (
    <div className="container">
      <h1>OuPas 🤔</h1>
      <div>
        <label htmlFor="mode">Choisis un thème de réponse :</label>
        <select id="mode" value={mode} onChange={(e) => setMode(e.target.value)}>
          <option value="normal">Classique</option>
          <option value="yolo">YOLO</option>
          <option value="sage">Mode Sage</option>
          <option value="maman">Maman</option>
        </select>
      </div>
      <button onClick={handleClick}>Clique pour savoir</button>
      {loading && <p>Réflexion intense en cours...</p>}
      {answer && !loading && <div className="answer">{answer}</div>}
    </div>
  );
}

export default App;
