import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/header/header';
import Home from './components/home/home';

function App() {
  return (

<Router>
  <div>
    <Header />
    <Routes>
      <Route path="/" exact element={<Home/>} />
    </Routes>
  </div>
</Router>

  );
}

export default App;
