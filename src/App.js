import { useContext } from 'react';
import './App.css';
import Home from './components/Home';
import { ThemeContext } from './context/ThemeContext';

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext)
  return (
    <div id={theme}>
      <Home theme={theme} toggleTheme={toggleTheme} />
    </div>
  );
}

export default App;
