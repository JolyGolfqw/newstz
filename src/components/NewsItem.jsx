// src/components/NewsItem.js
import React, { useState } from "react";
import { Link } from "react-router-dom";

const NewsItem = ({ news }) => {
  const [imgSrc, setImgSrc] = useState(news.image);

  const handleError = () => {
    setImgSrc("https://a.d-cd.net/-vBYRrmdWqNsAhuMwNwbn0asaLw-1920.jpg");
  };

  return (
    <div className="news-item">
      <img src={imgSrc} alt={news.title} onError={handleError} />
      <div className="info">
        <div>
          <h2>{news.title}</h2>
          <p className="news-content">{news.content}</p>
        </div>
        <div className="btn">
          <Link to={`/news/${news.id}`} className="btn-more">
            Подробнее
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
