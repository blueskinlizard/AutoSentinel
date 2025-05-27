import SignUp from "../Pages/Signup";
import App from "../App"

const routes = [
    {
        path: '/home',
        element: <App />
    },
    {
        path: '/signup',
        element: <SignUp />
    }
]
export default routes;