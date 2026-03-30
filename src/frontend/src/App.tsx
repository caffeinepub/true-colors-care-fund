import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";
import Donate from "./pages/Donate";
import GetHelp from "./pages/GetHelp";
import Guidelines from "./pages/Guidelines";
import Home from "./pages/Home";

export type Page = "/" | "/get-help" | "/donate" | "/guidelines" | "/contact";

function getPageFromHash(): Page {
  const hash = window.location.hash.replace("#", "") || "/";
  const validPages: Page[] = [
    "/",
    "/get-help",
    "/donate",
    "/guidelines",
    "/contact",
  ];
  return validPages.includes(hash as Page) ? (hash as Page) : "/";
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>(getPageFromHash);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPage(getPageFromHash());
      window.scrollTo(0, 0);
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const navigate = (page: Page) => {
    window.location.hash = page;
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    switch (currentPage) {
      case "/get-help":
        return <GetHelp navigate={navigate} />;
      case "/donate":
        return <Donate />;
      case "/guidelines":
        return <Guidelines />;
      case "/contact":
        return <Contact />;
      default:
        return <Home navigate={navigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar currentPage={currentPage} navigate={navigate} />
      <main className="flex-1">{renderPage()}</main>
      <Footer navigate={navigate} />
    </div>
  );
}
