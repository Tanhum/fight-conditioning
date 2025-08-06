import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import TrainingPlan from './pages/TrainingPlan.jsx';
import Impressum from './pages/Impressum.jsx';
import './index.css'; 
import './App.css'; 

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/training" element={<TrainingPlan />} />
      <Route path="/impressum" element={<Impressum />} />
    </Routes>
  );
}

export default App;
