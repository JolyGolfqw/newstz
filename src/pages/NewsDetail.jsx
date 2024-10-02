// src/pages/NewsDetail.js
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";

const NewsDetail = ({ news, onEdit, onDelete }) => {
  const { id } = useParams();
  const newsItem = news.find((item) => item.id === parseInt(id));
  const [imgSrc, setImgSrc] = useState(newsItem?.image);

  if (!newsItem) {
    return (
      <div className="not-found">
        <h1>Новость не найдена.</h1>
        <Link to="/">Вернуться на главную страницу</Link>
      </div>
    );
  }

  const handleDelete = () => {
    onDelete(newsItem.id);
  };

  const handleError = () => {
    setImgSrc("https://a.d-cd.net/-vBYRrmdWqNsAhuMwNwbn0asaLw-1920.jpg");
  };

  return (
    <div className="news-detail">
      <div className="header">
        <button onClick={() => onEdit(newsItem)} className="edit-button">
          Редактировать
        </button>
        <button onClick={handleDelete} className="delete-button">
          Удалить
        </button>
      </div>
      <h1>{newsItem.title}</h1>

      <img
        src={imgSrc}
        alt={newsItem.title}
        onError={handleError}
        className="news-image"
      />
      <p className="news-content">{newsItem.content}</p>
    </div>
  );
};

export default NewsDetail;
