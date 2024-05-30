import { RouterProvider, createBrowserRouter } from "react-router-dom"
import {
  HomeLayout,
  Landing,
  Register,
  Login,
  DashBoardLayout,
  Error,
  AddJob,
  Stats,
  Profile,
  Admin,
  EditJob,
} from './pages';

const route = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />
      },
      {
        path: 'register',
        element: <Register />
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'dashboard',
        element: <DashBoardLayout />
      }
    ],
  },
  // {
  //   path: '/register',
  //   element: <Register />
  // },
  // {
  //   path: '/login',
  //   element: <Login />,
  // },
  // {
  //   path: '/dashboard',
  //   element: <DashBoardLayout />
  // }
]
)

const App = () => {
  return (
   <RouterProvider router={route} />
  )
}

export default App