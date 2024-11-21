import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div>
      <Header />
      <main className="p-8  bg-[#F6F7F9] ">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
