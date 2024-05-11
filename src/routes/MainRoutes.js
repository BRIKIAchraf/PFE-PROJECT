import React, { lazy } from 'react';

// project import
import MainLayout from 'layout/MainLayout';
import Loadable from 'component/Loadable';
import { Navigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';


const DashboardDefault = Loadable(lazy(() => import('../views/Dashboard')));

const UtilsTypography = Loadable(lazy(() => import('../views/Utils/Typography')));

const SamplePage = Loadable(lazy(() => import('../views/SamplePage')));

const LeaveManagement = Loadable(lazy(() => import('../views/Conge/LeaveManagement')));

const PlanningManagement = Loadable(lazy(() => import('../views/planning/index')));


const DeviceManagement = Loadable(lazy(() => import('../views/devices/index')));

const DepartmentManagement = Loadable(lazy(() => import('../views/departement/index')));

const AddLeaveForm1 = Loadable(lazy(() => import('../views/Conge/AddLeaveForm')));

const AddPlanning = Loadable(lazy(() => import('../views/addplanning/index')));

const LoginPage = Loadable(lazy(() => import('../views/Login/loginpage')));

const Attendance = Loadable(lazy(() => import('../views/attendances/index')));

//const LoginMethods = Loadable(lazy(() => import('../views/login/index')));

const AddLoginMethod = Loadable(lazy(() => import('../views/login/AddLoginMethod')));

const LoginMethodsList = Loadable(lazy(() => import('../views/login/LoginMethodsList')));
// ==============================|| MAIN ROUTES ||============================== //

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return isAuthenticated ? children : <Navigate to="/LoginPage" />;
};

const MainRoutes = {
  
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <DashboardDefault />
    },
    {
      path: '/dashboard/default',
      element: <DashboardDefault />
    }, {path: '/LoginPage',
    element: <LoginPage />},

    { path: '/utils/util-typography', element: <UtilsTypography /> },
    { path: '/sample-page', element:<SamplePage />},
    { path: '/LeaveManagement', element: <LeaveManagement/>}, 
    { path: '/PlanningManagement', element:<PlanningManagement/> },
    { path: '/attendance', element: <Attendance />},
    { path: '/DeviceManagement', element: <DeviceManagement/>},
    { path: '/DepartmentManagement', element: <DepartmentManagement/>},
    { path: '/AddLeaveForm1', element: <AddLeaveForm1/>},
    { path: '/addplanning', element: <AddPlanning /> },
    //{ path: '/loginmethods', element: <LoginMethods /> },
    {path: '/AddLoginMethod', element: <AddLoginMethod />},
    {path: '/LoginMethodsList', element: <LoginMethodsList />}


  ]
};

export default MainRoutes;
