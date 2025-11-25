/*
  Title: AppLayout
  Created By: Nicolas Clocksin

  Description: Defines the layout of the application to be used by default for the routes.
*/
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

function AppLayout() {
  return (
    <div className="app-shell">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;
