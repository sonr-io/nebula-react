# React Components

These React Components are built for the SONR on-chain SSO capabilities.
## Usage/Examples

**Login Button**
```typescript
import Button from './components/Button';

function App() {
  return (
      <Button
        label="Login"
        onClick={() => {}}
        styling="bg-primaryLight-500 hover:bg-primaryLight-700 text-white font-bold py-2 px-4 rounded"
      />
  );
}
```