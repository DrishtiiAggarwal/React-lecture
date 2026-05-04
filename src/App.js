import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navigation from './components/Navigation';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import Page4 from './pages/Page4';
import Page5 from './pages/Page5';

function App() {
  return (
    <Router>
      <Navigation />
      <div className="app-container full-screen-layout">
        <Routes>
          <Route path="/page1" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
          <Route path="/page3" element={<Page3 />} />
          <Route path="/page4" element={<Page4 />} />
          <Route path="/page5" element={<Page5 />} />
          <Route path="/" element={<Navigate to="/page1" replace />} />
        </Routes>
        <footer className="app-footer">
          <p>Happy learning! 🚀</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;