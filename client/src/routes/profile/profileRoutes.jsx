 
import DefaultLayout from "@layouts/DefaultLayout"
import Home from "@pages/home/Home"
import Profile from "@pages/profile/Profile"
import RequiredAuthRoutes from "../../guards/RequiredAuthRoutes"
import { Navigate } from 'react-router-dom'

export default [ 
  {
    element: <RequiredAuthRoutes/>,
    children: [
          {
              element: <DefaultLayout/>,
              children:[
                  {
                      path: '/',
                      element: <Navigate to='/dashboard'/>
                  },
                  {
                      path: '/dashboard',
                      element: <Home/>
                  },
              ]
          }
      ]
  }
]
// export default [ 
//   {
//     element: <RequiredAuthRoutes><DefaultLayout/></RequiredAuthRoutes>,
//     children:[
//       {path: '/dashboard', element:<Home/>},
//       // {path: '/profile/:id', element:<Profile/>},
      
//     ]
//   }
// ]