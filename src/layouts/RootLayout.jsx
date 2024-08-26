import { NavLink, Outlet } from "react-router-dom";
import "../styles/index.css";

function RootLayout() {
    return (
        <>
            <NavLink
                className={({ isActive, isPending }) =>
                    isActive && "active"
                } to="/">
                Home
            </NavLink> |
            <NavLink
                className={({ isActive, isPending }) =>
                    isActive && "active"
                } to="/blog">
                Blog
            </NavLink> |
            <NavLink
                className={({ isActive, isPending }) =>
                    isActive && "active"
                } to="/about">
                About
            </NavLink>
            <p />
            <Outlet />
        </>
    );
}

export default RootLayout;