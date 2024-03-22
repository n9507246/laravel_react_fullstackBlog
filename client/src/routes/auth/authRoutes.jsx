import Login from '@pages/login/Login'
import Register from '@pages/register/Register'
import GuestRoutes from '../../guards/GuestsRoute'
// import GuestRoutes from '@/guards/GuestRoutes'
export default [
    {
        element: <GuestRoutes/>,
        children:[
            {
                path: "/login",
                element: <Login/>
            },
            {
                path: "/register",
                element: <Register/>,
            },
        ]
    }
]
