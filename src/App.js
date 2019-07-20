import React, { useEffect, useState } from 'react';
import { useForm } from './customHooks/useForm';
import { useFetch } from './customHooks/useFetch';
import './App.css';
// import SetStateCounter from './components/SetStateCounter';
// import SetStateForm from './components/SetStateForm';
import { UseEffectUnmount } from './components/UseEffectUnmount';

const App = () => {
  const [values, handleChange] = useForm({ email: '', password: '' });
  const [showUnmount, setShowUnmount] = useState(false);

  // Get inital state from local storage
  const [count, setCount] = useState(() => JSON.parse(localStorage.getItem('count')));

  // Use useEffect to persist informatin in local storage
  useEffect(() => {
    localStorage.setItem('count', JSON.stringify(count));
  }, [count]);

  const { data, loading } = useFetch(`http://numbersapi.com/${count}/trivia`);
  return (
    <div>
      <div>{!data ? 'loading...' : data}</div>
      <button type="button" onClick={() => setCount(currentCount => currentCount + 1)}>
        +
      </button>
      <button type="button" onClick={() => setShowUnmount(currentState => !currentState)}>
        Unmount
      </button>
      {showUnmount && <UseEffectUnmount />}
      <input name="email" value={values.email} onChange={handleChange} />
      <input type="password" name="password" value={values.password} onChange={handleChange} />
    </div>
  );
};

export default App;
