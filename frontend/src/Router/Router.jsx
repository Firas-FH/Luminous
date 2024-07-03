import App from '../App'
import { AboutRoutes } from '../Routes/AboutRoutes'
import { CreateEventRoutes } from '../Routes/CreateEventRoutes'
import { HomeRoutes } from '../Routes/HomeRoutes'
import { LogInRoutes } from '../Routes/LogInRoutes'
import { ProfileRoutes } from '../Routes/ProfileRoutes'
import { SignUpRoutes } from '../Routes/SignUpRoutes'
import { FooterRoutes } from '../Routes/FooterRoutes'
import { TeamRoutes } from '../Routes/TeamRoutes'
import { ServicesRoutes } from '../Routes/ServicesRoutes'
import { GalleryRoutes } from '../Routes/GalleryRoutes'
import { TestimonialsRoutes } from '../Routes/TestimonialsRoutes'



export const RouterProject = [
    {
        path : '/',
        element : <App />,
        children : [
            ...HomeRoutes,
            ...ProfileRoutes,
            ...CreateEventRoutes,
            ...SignUpRoutes,
            ...LogInRoutes,
            ...AboutRoutes,
            ...FooterRoutes,
            ...TeamRoutes,
            ...ServicesRoutes,
            ...GalleryRoutes,
            ...TestimonialsRoutes,

        ]
    }
]