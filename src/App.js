import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Stories from "./pages/stories/Stories";
import Header from "./components/header/Header";
import Categories from "./components/categories/Categories";
import { getCategoryFromSearchParam } from "./helper/helper";
import Home from "./pages/home/Home";
import Post from "./pages/post/Post";
import ErrorBoundary from "./components/error_boundary/ErrorBoundary";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <ErrorBoundary>
        <Header />
        <Categories
          currentCategory={getCategoryFromSearchParam(location.search)}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/post/:id" element={<Post />} />
        </Routes>
      </ErrorBoundary>
    </div>
  );
}

export default App;
