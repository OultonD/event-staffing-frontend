import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage.jsx';
import StaffPage from './pages/StaffPage.jsx';
import Layout from "./components/Layout.jsx";
import StaffOverview from "./pages/StaffOverview";

function App() {
  return (
    <Router>
     <Layout>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/staff" element={<StaffPage />} />
        <Route path="/overview" element={<StaffOverview />} />
      </Routes>
     </Layout>
    </Router>
  );
}

export default App;

