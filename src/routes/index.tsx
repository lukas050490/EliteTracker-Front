import { createBrowserRouter } from 'react-router-dom';

import Login from "../screens/login";
import Habits from '../screens/habits';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Habits />
    },
    {
        path: '/entrar',
        element: <Login />
    }
])


