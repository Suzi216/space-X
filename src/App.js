import './App.css';
import { Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Mission from './components/Mission';
import Rocket from './components/Rocket';
import Myprofile from './components/Myprofile';

const App = () => (
  <>
    <Nav />
    <Routes>
      <Route exact path="/" element={<Rocket />} />
      <Route path="/mission" element={<Mission />} />
      <Route path="/myprofile" element={<Myprofile />} />
    </Routes>
  </>
);

export default App;
