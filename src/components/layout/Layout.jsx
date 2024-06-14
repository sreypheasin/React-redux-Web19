import NavbarComponent from "../NavbarComponent";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <NavbarComponent />
      <main className="max-w-screen-xl mx-auto">
        <Outlet />
      </main>
    </>
  );
}
