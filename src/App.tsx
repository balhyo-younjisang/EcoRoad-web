import loadable from "@loadable/component";
import { Route, Routes, useLocation } from "react-router-dom";

const HomePage = loadable(() => import("./pages/Home"));
const MainPage = loadable(() => import("./pages/Main"));

const App = () => {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<HomePage />} loader={HomePage.load} />
      <Route path="/main" element={<MainPage />} loader={MainPage.load} />
    </Routes>
  );
};

export default App;
