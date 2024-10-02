import React, { useEffect, useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import News from "./pages/News";
import NewsDetail from "./pages/NewsDetail";
import Header from "./components/Header";

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState("Все");
  const [isModalOpen, setModalOpen] = useState(false);
  const [editData, setEditData] = useState(null);
  const [news, setNews] = useState([]);

  const handleEditNews = (newsItem) => {
    setEditData(newsItem);
    setModalOpen(true);
  };

  const saveNews = (newNews) => {
    const updatedNews = editData
      ? news.map((item) =>
          item.id === editData.id ? { ...item, ...newNews } : item
        )
      : [newNews, ...news];

    setNews(updatedNews);
    localStorage.setItem("news", JSON.stringify(updatedNews));
  };

  useEffect(() => {
    const storedNews = JSON.parse(localStorage.getItem("news")) || [];
    setNews(storedNews);
  }, []);

  const handleAddNews = () => {
    setEditData(null);
    setModalOpen(true);
  };

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
  };

  const filteredNews =
    selectedCategory === "Все"
      ? news
      : news.filter((item) => item.category === selectedCategory);

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleDeleteNews = (id) => {
    const updatedNews = news.filter((item) => item.id !== id);
    setNews(updatedNews);
    localStorage.setItem("news", JSON.stringify(updatedNews));
  };

  return (
    <div className="app">
      <Header
        onAddNews={handleAddNews}
        onSelectCategory={handleSelectCategory}
        saveNews={saveNews}
        editData={editData}
        isModalOpen={isModalOpen}
        closeModal={closeModal}
      />

      <Routes>
        <Route path="/" element={<News news={filteredNews} />} />
        <Route
          path="/news/:id"
          element={
            <NewsDetail
              news={news}
              onEdit={handleEditNews}
              onDelete={handleDeleteNews}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default App;
