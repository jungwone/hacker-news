import "./App.css";
import { Routes, Route } from "react-router-dom";
import TopStories from "./pages/top_stories/TopStories";
import Stories from "./pages/Stories/Stories";
import { Routes, Route, useLocation } from "react-router-dom";
import Stories from "./pages/stories/Stories";
import Header from "./components/header/Header";
import Categories from "./components/categories/Categories";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <Header />
      <Categories />
      <Categories
        currentCategory={getCategoryFromSearchParam(location.search)}
      />
      <Routes>
        <Route path="/stories" element={<Stories />} />
        <Route path="/topstories" element={<TopStories />} />
      </Routes>
    </div>
  );
}

export default App;
