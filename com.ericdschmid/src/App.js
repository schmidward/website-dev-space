import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import Home from './components/home/home';

function App() {
  return (

<Router>
  <div>
    <Routes>
      <Route path="/" exact element={<Home/>} />
    </Routes>
  </div>
</Router>

  );
}

export default App;
