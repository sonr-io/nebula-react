import './App.css';
import Button from './components/Button';

function App() {
  return (
    <div className="App">
      <Button text="Click me!" onClick={() => alert("Hello!")} />
    </div>
  );
}

export default App;
