import App from '../App'
import { CreateEventRoutes } from '../Routes/CreateEventRoutes'
import { HomeRoutes } from '../Routes/HomeRoutes'
import { LogInRoutes } from '../Routes/LogInRoutes'
import { ProfileRoutes } from '../Routes/ProfileRoutes'
import { SignUpRoutes } from '../Routes/SignUpRoutes'
export const RouterProject = [
    {
        path : '/',
        element : <App />,
        children : [
            ...HomeRoutes,
            ...ProfileRoutes,
            ...CreateEventRoutes,
            ...SignUpRoutes,
            ...LogInRoutes
        ]
    }
]