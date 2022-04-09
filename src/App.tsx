import './App.css';
import LoginButton from './components/LoginButton';
import SignUpButton from './components/SignupButton';

function App() {
  return (
    <div className="App">
      <div className="flex flex-col items-center mx-auto p-8">
      <LoginButton 
      label="Login" 
      styling={"inline-flex items-center px-4 py-2 text-white bg-primaryLight-500 rounded hover:bg-primaryLight-700"} 
      onClick={() => alert("Login!")} 
      />
      <SignUpButton 
      label="Sign Up" 
      styling={"inline-flex items-center px-4 py-2 text-white bg-primaryDark-500 rounded hover:bg-primaryDark-700"} 
      onClick={() => alert("Sign Up!")} 
      />
      </div>
    </div>
  );
}

export default App;
