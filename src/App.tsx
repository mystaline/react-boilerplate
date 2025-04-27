import { lazy, Suspense, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

// Lazy loading components (dynamic import)
const HomePage = lazy(() => import('./pages/HomePage'));
// Add more lazy imports as needed

const App = () => {
  useEffect(() => {
    console.log('App mounted');
  }, []);

  return (
    <Router basename="/">
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="*" element={<div>404 - Page Not Found</div>} />
          {/* Add more routes as needed */}
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
