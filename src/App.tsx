import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { getQuestions } from './services/dataService';

function App() {
  const [count, setCount] = useState(0);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    setQuestions(getQuestions());
  });

  return (
    <div>

    </div>
  )
}

export default App
