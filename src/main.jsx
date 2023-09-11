import React from 'react'
import moment from 'moment'
import 'moment/locale/id'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// set UI libyary
import 'antd/dist/antd.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import Users from './pages/Users'
import PagesError404 from './pages/404'
import './index.css'

const root = createRoot(document.getElementById('root'))
moment.locale('id')

const router = createBrowserRouter([
    {
        path: '/',
        element: <Users />,
    },
    {
        path: '*',
        element: <PagesError404 />,
    },
])

root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)
