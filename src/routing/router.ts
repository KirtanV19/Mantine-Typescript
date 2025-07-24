import { createBrowserRouter } from "react-router-dom";

// Routes
import { PLAIN_ROUTES, AUTH_ROUTES, PRIVATE_ROUTES } from "./routes";

// Layout
import PlainLayout from "../layouts/plain-layout";
import PrivateLayout from "../layouts/private-layout";
import AuthLayout from "../layouts/auth-layout";

// Component
import Dashboard from "../pages/auth/Dashboard";
import Tasks from "../pages/auth/Tasks";
import Login from "../pages/login";
import Register from "../pages/register";
import ForgotPassword from "../pages/forgot-password";
import UserDashboard from "../pages/user-dashboard";
import UserTask from "../pages/user-task";
import PageNotFound from "../components/PageNotFound";
import WelcomeUser from "../pages/user-welcome";

export const router = createBrowserRouter([
  {
    ...PLAIN_ROUTES.layout,
    Component: PlainLayout,
    children: [
      { ...PLAIN_ROUTES.INDEX, Component: WelcomeUser },
      { ...PLAIN_ROUTES.LOGIN, Component: Login },
      { ...PLAIN_ROUTES.REGISTER, Component: Register },
      { ...PLAIN_ROUTES.FORGOT_PASSWORD, Component: ForgotPassword },
    ],
  },
  {
    ...AUTH_ROUTES.layout,
    Component: AuthLayout,
    children: [
      { ...AUTH_ROUTES.INDEX, Component: WelcomeUser },
      { ...AUTH_ROUTES.DASHBOARD, Component: Tasks },
      { ...AUTH_ROUTES.TASKS, Component: Dashboard },
    ],
  },
  {
    ...PRIVATE_ROUTES.layout,
    Component: PrivateLayout,
    children: [
      { ...PRIVATE_ROUTES.INDEX, Component: WelcomeUser },
      { ...PRIVATE_ROUTES.USER_DASHBOARD, Component: UserDashboard },
      { ...PRIVATE_ROUTES.USER_TASK, Component: UserTask },
    ],
  },
  { path: "*", Component: PageNotFound },
]);
