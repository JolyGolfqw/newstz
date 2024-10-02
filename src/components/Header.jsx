import React from "react";
import { Link } from "react-router-dom";
import NewsForm from "./NewsForm";

const Header = ({
  onAddNews,
  onSelectCategory,
  isModalOpen,
  saveNews,
  editData,
  closeModal,
}) => {
  return (
    <header>
      {isModalOpen && (
        <div className="modal">
          <NewsForm
            onSubmit={saveNews}
            initialData={editData}
            onClose={closeModal}
          />
        </div>
      )}
      <Link to="/" className="logo">
        <h1>NEWS</h1>
      </Link>
      <nav>
        <select onChange={(e) => onSelectCategory(e.target.value)}>
          <option value="Все">Все</option>
          <option value="Спорт">Спорт</option>
          <option value="Игры">Игры</option>
          <option value="Авто">Авто</option>
          <option value="Наука">Наука</option>
        </select>
        <button className="btn-add" onClick={onAddNews}>
          Добавить новость
        </button>
      </nav>
    </header>
  );
};

export default Header;
