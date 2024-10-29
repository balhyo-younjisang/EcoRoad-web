import loadable from "@loadable/component";
import { Route, Routes } from "react-router-dom";

const MainPage = loadable(() => import('./pages/Main'));
const VehiclePage = loadable(() => import('./pages/Vehicle'));

const App = () => {
  return <Routes>
    <Route path="/" element={<MainPage />} loader={MainPage.load} />
    <Route path="/vehicle" element={<VehiclePage />} loader={VehiclePage.load} />
  </Routes>
}

export default App;