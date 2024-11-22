import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { useThemeContext } from "@/context/LightDarkModeContext";

export default function Layout() {
  const { theme } = useThemeContext();

  return (
    <div className={`theme--${theme}-hf`}>
      <Header />
      <main className={`bg-[#F6F7F9] ${`theme--${theme}-bg`}`}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
