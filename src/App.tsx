import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Signup from './pages/SignupPage';
import Login from './pages/LoginPage';
import Dashboard from './pages/dashboardPage';
// import './App.css'
import EditLead from './pages/EditLeadPage';
import PrivateRoutes from './components/guards/PrivateRoute';
import AuthPageLayout from './pages/layouts/AuthLayout';
import CreateLead from './pages/CreateLeadPage';
import DeleteLeadPage from './pages/DeleteLeadPage';

const App = () => {
  return (

    <Router>
      <Routes>
        <Route element={<AuthPageLayout />}>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Route>
        <Route element={<PrivateRoutes />}>
          <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/create" element={<CreateLead />} />
            <Route path="/edit-lead/:id" element={<EditLead />} />
            <Route path="/delete-lead/:id" element={<DeleteLeadPage />} />        

        </Route >
      </Routes>
    </Router>

  );
};

export default App;
