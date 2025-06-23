import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import { DarkModeProvider } from "./context/mode";
import { RefProvider } from "./context/ref";
import Footer from "./components/Footer";

function App() {
  return (
    <RefProvider>
      <DarkModeProvider>
        <NavBar />
        <Outlet />
        <Footer />
      </DarkModeProvider>
    </RefProvider>
  );
}

export default App;
