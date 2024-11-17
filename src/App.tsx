import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Signup from './pages/SignupPage';
import Login from './pages/LoginPage';
import Dashboard from './pages/dashboardPage';
import EditLead from './pages/EditLeadPage';
import PrivateRoutes from './components/guards/PrivateRoute';
import AuthPageLayout from './pages/layouts/AuthLayout';
import DeleteLeadPage from './pages/DeleteLeadPage';
import LeadForm from './components/lead-management/LeadForm';
import LeadManagement from './pages/LeadManagement';

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
          <Route path='/lead-management' >
            <Route path="" element={<LeadManagement />} />
            <Route path="create" element={<LeadForm />} />
            <Route path="edit/:id" element={<EditLead />} />
            <Route path="delete/:id" element={<DeleteLeadPage />} />
          </Route>

        </Route >
      </Routes>
    </Router>

  );
};

export default App;
