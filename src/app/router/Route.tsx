import { createBrowserRouter } from "react-router-dom";
import App from "../layout/App";
import EventDashBoard from "../../features/events/dashboard/EventDashBoard";
import EventDetailsPage from "../../features/events/dashboard/details/EventDetailsPage";
import EventForm from "../../features/events/dashboard/forms/EventForm";

export const router = createBrowserRouter([
    {
         path: '/',
         element: <App />,
         children: [
            {path: '/events', element: <EventDashBoard/>},
            {path: '/events/:id', element: <EventDetailsPage/>},
            {path: '/manage/:id', element: <EventForm/>},
            {path: '/createEvent', element: <EventForm/>},
         ]

    }
])