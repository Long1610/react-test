import { Link, Outlet } from "react-router-dom";
import AuthStatus from "../auth-status";

function Layout() {
  return (
    <div>
      <AuthStatus />

      <ul>
        <li>
          <Link to="/about">About Page</Link>
        </li>
        <li>
          <Link to="/protected">Protected Page</Link>
        </li>
        <li>
          <Link to="/menu">Menu</Link>
        </li>
      </ul>

      <Outlet />
    </div>
  );
}

export default Layout;
