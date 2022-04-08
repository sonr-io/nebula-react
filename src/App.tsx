import './App.css';
import Button from './components/Button';

function App() {
  return (
    <div className="App">
      <Button label="Login" styling={"bg-primaryLight-500 hover:bg-primaryLight-700 text-white font-bold py-2 px-4 rounded"} onClick={() => alert("Hello!")} />
    </div>
  );
}

export default App;
