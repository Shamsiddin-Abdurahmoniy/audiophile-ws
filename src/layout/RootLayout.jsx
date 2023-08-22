import { Outlet } from "react-router-dom";
// components
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

function RootLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default RootLayout;
