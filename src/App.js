import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Common/Header';
import HomePage from './pages/Home';
import CoinPage from './pages/Coin';
import DashboardPage from './pages/Dashboard';
import ComparePage from './pages/ComparePage';
import Watchlist from './pages/Watchlist';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
       <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/dashboard' element={<DashboardPage />} />
          <Route path='/coin/:id' element={<CoinPage />} />
          <Route path='/compare' element={<ComparePage />} />
          <Route path='/watchlist' element={<Watchlist />} />
       </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
