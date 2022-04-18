import './css/styles.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import { DataProvider } from './Contexts/DataContext';

function App() {
  return (
    <div className="container">
      <DataProvider>
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </DataProvider>
    </div>
  );
}

export default App;
