import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Main from "./Layout/Main";
import Home from "./Pages/Home";
import About from "./Pages/AboutPage";
import Projects from "./Pages/ProjectPage";
import Contact from "./Pages/ContactPage";
import GlobalStyles from "./Styles/GlobalStyles";
import ServicePage from "./Pages/ServicePage";
import ScrollToTop from "react-scroll-to-top";

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <ScrollToTop
          smooth
          viewBox="0 0 20 20"
          svgPath="M13.889,11.611c-0.17,0.17-0.443,0.17-0.612,0l-3.189-3.187l-3.363,3.36c-0.171,0.171-0.441,0.171-0.612,0c-0.172-0.169-0.172-0.443,0-0.611l3.667-3.669c0.17-0.17,0.445-0.172,0.614,0l3.496,3.493C14.058,11.167,14.061,11.443,13.889,11.611 M18.25,10c0,4.558-3.693,8.25-8.25,8.25c-4.557,0-8.25-3.692-8.25-8.25c0-4.557,3.693-8.25,8.25-8.25C14.557,1.75,18.25,5.443,18.25,10 M17.383,10c0-4.07-3.312-7.382-7.383-7.382S2.618,5.93,2.618,10S5.93,17.381,10,17.381S17.383,14.07,17.383,10"
        />
        <Routes>
          <Route path="/" element={<Main activePage={<Home />} />} />
          <Route path="/company" element={<Main activePage={<About />} />} />

          <Route
            path="/services"
            element={<Main activePage={<ServicePage />} />}
          />
          <Route
            path="/projects"
            element={<Main activePage={<Projects />} />}
          />
          <Route
            path="/contactUs"
            element={<Main activePage={<Contact />} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
