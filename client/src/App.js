import './App.css';
import Home from './pages/Home';
import ContextProvider from './context/GlobalContext';

function App() {
  return (
    <div className="App">
      <ContextProvider >
        <Home/>
      </ContextProvider>
    </div>
  );
}

export default App;
