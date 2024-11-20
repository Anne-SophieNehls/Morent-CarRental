import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div>
      <Header />
      <main className="p-4  bg-slate-50 ">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
