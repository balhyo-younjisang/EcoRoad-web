import loadable from "@loadable/component";
import { Route, Routes, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const HomePage = loadable(() => import("./pages/Home"));

const App = () => {
  const location = useLocation();

  return (
    <TransitionGroup>
      <CSSTransition timeout={300} classNames="fade">
        <Routes location={location}>
          <Route path="/" element={<HomePage />} loader={HomePage.load} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default App;
