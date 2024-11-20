import { useThemeContext } from "@/context/LightDarkModeContext";

export default function LightDarkThemeSwitcher() {
  const { theme, toggleTheme } = useThemeContext();
  return (
    <button onClick={toggleTheme}>
      {theme === "light" ? (
        <img
          src="../../public/img/icon/sun-darkmode-icon.svg"
          alt="darkmode"
          className="L-D-Mode"
        />
      ) : (
        <img
          src="../../public/img/icon/sun-lightmode-icon.svg"
          alt="lightmode"
          className="L-D-Mode"
        />
      )}
    </button>
  );
}
