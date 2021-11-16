import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Stories from "./pages/stories/Stories";
import Header from "./components/header/Header";
import Categories from "./components/categories/Categories";
import { getCategoryFromSearchParam } from "./helper/helper";

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
