import './App.css';
import { LoginButton } from './components/LoginButton/LoginButton';
import { RegisterButton } from './components/RegisterButton/RegisterButton';
import { RegisterForm } from './components/RegisterForm/RegisterForm';

function App() {
  return (
    <div className="App">
      <div className="flex flex-col items-center mx-auto p-8">
      <LoginButton
      domain="foo" 
      label="Login" 
      styling={"inline-flex items-center px-4 py-2 text-white bg-primaryLight-500 rounded hover:bg-primaryLight-700"} 
      onLogin={() => alert("Login!")} 
      />
      </div>

      

    </div>
  );
}

export default App;