import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import Home from './components/home/home';
import Scroll from './components/scroll/scroll';

function App() {
  return (

<Router>
  <div>
    <Routes>
      <Route path="/" exact element={<Home/>} />
      <Route path="/scroll" exact element={<Scroll />} />
    </Routes>
  </div>
</Router>

  );
}

export default App;
