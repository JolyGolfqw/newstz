import React from "react";
import NewsItem from "../components/NewsItem";

const News = ({ news }) => {
  console.log(news);
  return (
    <div>
      {news.length === 0 ? (
        <div className="no-news-message">
          <p>Нет новостей.</p>
          <p>Добавьте новость, чтобы она появилась здесь!</p>
        </div>
      ) : (
        news.map((item) => <NewsItem key={item.id} news={item} />)
      )}
    </div>
  );
};

export default News;
