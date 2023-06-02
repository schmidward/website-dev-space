import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import Home from './components/home/home';
import Scroll from './components/scroll/scroll';
import Work from './components/mywork/mywork'
import Header from './components/header/header';

function App() {
  return (

<Router>
  <div>
    <Routes>
      <Route path="/" exact element={<Home/>} />
      <Route path="/scroll" exact element={<Scroll />} />
      <Route path="/mywork" exact element={<Work />} />
    </Routes>
  </div>
</Router>

  );
}

export default App;
