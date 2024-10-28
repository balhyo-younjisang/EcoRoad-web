import loadable from "@loadable/component";
import { Route, Routes } from "react-router-dom";

const MainPage = loadable(() => import('./pages/Main'));

const App = () => {
  return <Routes>
    <Route path="/" element={<MainPage />} loader={MainPage.load} />
  </Routes>
}

export default App;