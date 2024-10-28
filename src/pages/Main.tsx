import { Helmet } from "react-helmet-async";
import { Header, LandingSection } from "../components";

const MainPage = () => {
  return <>
    <Helmet>
      <title>ECO X</title>
      <meta name="description" content="ECO X" />
      <meta name="keywords" content="ECO X" />
    </Helmet>
    <Header />
    <LandingSection />
  </>
}

export default MainPage;
