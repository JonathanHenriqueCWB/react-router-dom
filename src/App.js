// React router dom
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

import Home, {About} from './pages/pages'

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Link to="/">Home </Link>
          <Link to="/about">About</Link>
        </div>
        <Routes>
          <Route path='/' element={<Home></Home>} />
          <Route path='/about' element={<About></About>} />
          <Route path='*' element={<h1>Pagina não encontrada</h1>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;
