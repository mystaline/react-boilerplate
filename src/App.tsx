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
          <Route element={<Navigate replace to="/home" />} path="/" />
          <Route element={<HomePage />} path="/home" />
          <Route element={<div>404 - Page Not Found</div>} path="*" />
          {/* Add more routes as needed */}
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
