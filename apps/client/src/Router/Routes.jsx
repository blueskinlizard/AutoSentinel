import SignUp from "../Pages/Signup";
import App from "../App"
import CameraPage from "../Pages/CameraPage";
import Dashboard from "../Pages/Dashboard";
import IncidentPage from "../Pages/IncidentPage";

const routes = [
    {
        path: '/',
        element: <App />
    },
    {
        path: '/home',
        element: <App />
    },
    {
        path: '/signup',
        element: <SignUp />
    },
    {
        path: '/surveilance',
        element: <CameraPage />
    },
    {
        path: '/dashboard/:dashboardURL',
        element: <Dashboard />
    },
    {
        path: `/incident/:incidentURL`,
        element: <IncidentPage />
    }
]
export default routes;