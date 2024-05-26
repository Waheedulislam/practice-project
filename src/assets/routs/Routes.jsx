import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Register from "../pages/Register";
import DashBoardLayout from "../layouts/DashBoardLayout";
import PrivateRouts from "./PrivateRouts";
import DashboardHome from "../pages/Dashboard/DashboardHome";
import ManageAllRecepi from "../pages/Dashboard/ManageAllRecepi";
import AddRecipe from "../pages/Dashboard/AddRecipe";
import EditRecipe from "../pages/Dashboard/EditRecipe";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayouts />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/contact',
                element: <Contact />
            }, {
                path: '/login',
                element: <Login />
            }, {
                path: '/register',
                element: <Register />
            }
        ]
    },
    {
        path: '/dashBoard',
        element: (
            <PrivateRouts>
                <DashBoardLayout />
            </PrivateRouts>
        ),
        children: [
            {
                index: true,
                element: <DashboardHome></DashboardHome>
            },
            {
                path: 'dashboard',
                element: <DashboardHome></DashboardHome>
            },
            {
                path: 'manage-recipe',
                element: <ManageAllRecepi></ManageAllRecepi>
            },
            {
                path: 'add-recipe',
                element: <AddRecipe />
            },
            {
                path: 'edit-recipe/:id',
                element: <EditRecipe></EditRecipe>
            }

        ]
    }

])

export default router;