import { createBrowserRouter, redirect } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

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
    loader: () => {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          const decoded = jwtDecode(token) as { exp?: number; role?: string };

          // Check expiration (optional, based on JWT claims)
          if (decoded.exp && Date.now() >= decoded.exp * 1000) {
            return redirect("/login"); // Token expired
          }

          if (decoded.role === "admin") {
            return redirect(AUTH_ROUTES.DASHBOARD.url);
          }

          return null; // Allow route to render
        } catch (err) {
          console.error(err);
          return redirect(PLAIN_ROUTES.LOGIN.url); // Invalid token
        }
      }
      return null;
    },

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

/**
 
✅ Final Note on loader with Authentication in React Router:-

1.Purpose of loader

->The loader function in React Router is used to pre-fetch data or perform logic before the route's component renders.
->You can also use it to protect routes by checking authentication and redirecting if necessary.

2.Typical Authentication Flow in a loader

->Get the token from localStorage (or cookie/session).
->Decode and validate the token (e.g. using jwt-decode).
->If the token is invalid or expired, redirect to login.
->If valid, return data (or just allow access by returning null).

3.Return Values

->If you want to allow access: return null or some pre-fetched data.

->If you want to redirect: use return redirect("/some-path").

4.Token Validation

->Validation includes:

 i.Checking if token exists.

 ii.Decoding it to check role/expiry.

 iii.Redirecting based on role or validity.

 */
