import React from "react";
import { RiStarSLine } from "react-icons/ri";

const Book = (props) => {
  const { title, author, img, price, buyer } = props;

  return (
    <article className="book">
      <BookCover img={img} title={title} price={price} />
      <div className="foot">
        <BookName title={title} />
        <Author author={author} price={price} buyer={buyer} />
      </div>
    </article>
  );
};
const BookName = ({ title }) => {
  return <h4>{title}</h4>;
};
const Author = ({ author, price, buyer }) => {
  return (
    <div>
      <p>{author}</p>
      <div className="container">
        <RiStarSLine id="rating" />
        <RiStarSLine id="rating" />
        <RiStarSLine id="rating" />
        <RiStarSLine id="rating" />
        <RiStarSLine id="rating" />
        <span id="buyer">{buyer}</span>
      </div>
      <p id="price">&#8377;{price}</p>
    </div>
  );
};
const BookCover = ({ img, title, price }) => {
  const handleClick = () => {
    alert(`Price: ${price}`);
  };
  return <img src={img} alt={title} onClick={handleClick} />;
};

export default Book;
