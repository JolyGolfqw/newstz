import React, { useState } from "react";

const categories = ["Спорт", "Игры", "Авто", "Наука"];

const NewsForm = ({ onSubmit, initialData, onClose }) => {
  const [title, setTitle] = useState(initialData ? initialData.title : "");
  const [image, setImage] = useState(initialData ? initialData.image : "");
  const [content, setContent] = useState(
    initialData ? initialData.content : ""
  );
  const [category, setCategory] = useState(
    initialData ? initialData.category : ""
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      id: initialData ? initialData.id : Date.now(),
      title,
      image: image
        ? image
        : "https://a.d-cd.net/-vBYRrmdWqNsAhuMwNwbn0asaLw-1920.jpg",
      content,
      category,
    });
    onClose();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="btn-close">
        <button onClick={onClose}>Закрыть</button>
      </div>
      <input
        type="text"
        placeholder="Заголовок"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Ссылка на фото"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <textarea
        placeholder="Текст новости"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      />
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
      >
        <option value="">Выберите категорию</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
      <div className="btn-save">
        <button type="submit">Сохранить</button>
      </div>
    </form>
  );
};

export default NewsForm;
