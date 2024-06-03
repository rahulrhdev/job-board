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
  AllJobs
} from './pages';

export const checkDefaultTheme = () => {
  console.log(localStorage.getItem('darkTheme') === 'true', 'ls')
  const isDarkTheme = localStorage.getItem('darkTheme') === 'true'
  console.log('check', isDarkTheme)
  localStorage.setItem('darkTheme', isDarkTheme)
  document.body.classList.toggle('dark-theme', isDarkTheme)
  return isDarkTheme
}

checkDefaultTheme()

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
        element: <DashBoardLayout/>,
        children: [
          {
            index: true,
            element: <AddJob />
          },
          {
            path: 'stats',
            element: <Stats />
          },
          {
            path: 'all-jobs',
            element: <AllJobs />
          },
          {
            path: 'profile',
            element: <Profile />
          },
          {
            path: 'admin',
            element: <Admin />
          }
        ]
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