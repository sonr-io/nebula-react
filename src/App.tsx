import './App.css';
import { LoginButton } from './components/LoginButton/LoginButton';

/**
 * DO NOT MODIFY AT THIS TIME, WEBPACK CONFIG WITHIN CREATE REACT APP IS IN CHARGE OF
 * BUNDLING TAILWIND CSS FOR STORYBOOK.
 * Need to properly configure storybook with rollup rather than using two bunlders but this will work for the time being.
 */
function App() {
  return (
    <div className="App">
      <div className="flex flex-col items-center mx-auto p-8">
        <LoginButton
          domain="foo"
          label="Login"
          styling="inline-flex items-center px-4 py-2 text-white bg-primaryLight-500 rounded hover:bg-primaryLight-700"
          onLogin={() => alert('Login!')}
          onError={function (_error: any): void {
          }}
        />
      </div>
    </div>
  );
}

export default App;
