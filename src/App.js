import { Route, Routes } from 'react-router-dom';
import ListPokemons from './components/listPokemons';
import Navbar from './components/navbar';
import Pokemon from './components/pokemon';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route element={<ListPokemons />} exact path="/" />
        <Route element={<Pokemon /> } path="/pokemon/:id?" />
      </Routes>
    </div>
  );
}

export default App;
