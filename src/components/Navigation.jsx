import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';

export default function Navigation() {
  const location = useLocation();
  
  const pages = [
    { path: '/page1', label: '1. Props' },
    { path: '/page2', label: '2. Broken Variable' },
    { path: '/page3', label: '3. useState' },
    { path: '/page4', label: '4. Context' },
    { path: '/page5', label: '5. useReducer' }
  ];

  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="nav-header">
          <h1>React Lecture Demo</h1>
        </div>
        <div className="nav-links">
          {pages.map(page => (
            <Link
              key={page.path}
              to={page.path}
              className={`nav-link ${location.pathname === page.path ? 'active' : ''}`}
            >
              {page.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
