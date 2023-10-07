import { BrowserRouter, Routes, Route } from "react-router-dom";

// import pages
import HomePage from "./pages/Home.page";
import CommunityPage from "./pages/Community.page";

// import styles
import { GlobalStyle } from "./styles/global.style";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/community" element={<CommunityPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
