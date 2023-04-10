import Home from './../pages/Home';
import About from './../pages/About';
import Dashboard from './../pages/Dashboard';
import SignUp from './../pages/SignUp';

const RoutesConfig = [
    {
        path: '/',
        element: <Home/>
    },
    {
        path: '/about',
        element: <About/>
    },
    {
        path: '/dashboard',
        element: <Dashboard/>
    },
    {
        path: '/sign-up',
        element: <SignUp/>
    },
]
export default RoutesConfig;