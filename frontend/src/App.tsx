
import { FC } from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import NavBar from './components/NavBar/NavBar';
import HomePage from './pages/HomePage/HomePage';
import CreateSoldierPage from './pages/CreateSoldierPage/CreateSoldierPage';
import SoldiersListPage from './pages/SoldiersListPage/SoldiersListPage';
import MissionsListPage from './pages/MissionsListPage/MissionsListPage';
import { ThemeProvider } from '@emotion/react';
import theme from './theme.ts'
import { CssBaseline } from '@mui/material';

const App: FC =()=> {


  const router = createBrowserRouter([
    {
      path: "/",
      element: <NavBar />,
      // layout
      children: [
        { path: "", element: <HomePage /> },
        {
          path: "/create",
          element: <CreateSoldierPage/>,
        },
        {
          path: "/soldierlist",
          element: <SoldiersListPage />,
        },
        {
          path: "/missionlist",
          element: <MissionsListPage/>,
        },
      ],
    },

  ]);
  


  return (
    <>
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <RouterProvider router={router}/>
      </ThemeProvider>

     
    </>
  )
}

export default App
