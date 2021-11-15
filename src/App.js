import "./App.css";
import { Routes, Route } from "react-router-dom";
import TopStories from "./pages/top_stories/TopStories";
import Stories from "./pages/Stories/Stories";
import Header from "./components/header/Header";
import Categories from "./components/categories/Categories";

function App() {
  return (
    <div className="App">
      <Header />
      <Categories />
      <Routes>
        <Route path="/stories" element={<Stories />} />
        <Route path="/topstories" element={<TopStories />} />
      </Routes>
    </div>
  );
}

export default App;
