import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyle from "./theme/GlobalStyle";
import theme from "./theme/Theme";
import { ThemeProvider } from "styled-components";
import Home from "./pages/Home";
import Applayout from "./Applayout/AppLayout";
import About from "./components/aboutsection/About";
import Policies from "./components/policiessection/Policies";
import DeleteUser from "./components/deleteuserpage/DeleteUser";
import Blogviewpage from "./components/blogsection/blogviewpage";
import Blog from "./components/blogsection/Blog";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<Applayout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/policies" element={<Policies />} />
            <Route path="/delete-user" element={<DeleteUser />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<Blogviewpage />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
