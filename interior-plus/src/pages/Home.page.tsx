// import components
import Header from "../components/common/Header.component";
import NavMenu from "../components/Home/NavMenu.component";

const HomePage = () => {
  return (
    <>
      <Header info={{ pageTitle: "Hello" }} />
      <NavMenu />
    </>
  );
};

export default HomePage;
