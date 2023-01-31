import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import Book from "./Book";

const BookList = () => {
  return (
    <main>
      <div className="heading">
        <h1 id="heading">Bestsellers in Books</h1>
      </div>
      <div className="underline"></div>
      <article className="bookList">
        <Book
          title={"Energize Your Mind"}
          author={"Gaur Gopal Das"}
          img={
            "https://images-eu.ssl-images-amazon.com/images/I/71B4h-dSVzL._AC_UL600_SR600,400_.jpg"
          }
          price={"199.00"}
          buyer={163}
        />
        <Book
          title={"Atomic Habits"}
          author={"James Clear"}
          img={
            "https://images-eu.ssl-images-amazon.com/images/I/91bYsX41DVL._AC_UL600_SR600,400_.jpg"
          }
          price={"397.00"}
          buyer={"64,393"}
        />
        <Book
          title={"The Psychology of Money"}
          author={"Morgan Housel"}
          img={
            "https://images-eu.ssl-images-amazon.com/images/I/71g2ednj0JL._AC_UL600_SR600,400_.jpg"
          }
          price={"210.00"}
          buyer={"44,885"}
        />
        <Book
          title={"Ikigai"}
          author={"Hector Garcia"}
          img={
            "https://images-eu.ssl-images-amazon.com/images/I/814L+vq01mL._AC_UL600_SR600,400_.jpg"
          }
          price={"347.00"}
          buyer={"40,978"}
        />
        <Book
          title={"The Power of Your Subconscious Mind"}
          author={"Joseph Murphy"}
          img={
            "https://images-eu.ssl-images-amazon.com/images/I/71sBtM3Yi5L._AC_UL600_SR600,400_.jpg"
          }
          price={"104.00"}
          buyer={"65,723"}
        />
        <Book
          title={"Do It Today"}
          author={"Darius Foroux"}
          img={
            "https://images-eu.ssl-images-amazon.com/images/I/61ZPDQOjw-L._AC_UL600_SR600,400_.jpg"
          }
          price={"98.00"}
          buyer={"3,888"}
        />
        <Book
          title={"Rich Dad Poor Dad"}
          author={"Robert T. Kiyosaki"}
          img={
            "https://images-eu.ssl-images-amazon.com/images/I/81PuKheA8xL._AC_UL600_SR600,400_.jpg"
          }
          price={"379.00"}
          buyer={"15,914"}
        />
        <Book
          title={"Grandma's Bag of Stories"}
          author={"Sudha Murty"}
          img={
            "https://images-eu.ssl-images-amazon.com/images/I/61yB0UFlM3L._AC_UL600_SR600,400_.jpg"
          }
          price={"188.00"}
          buyer={"17,298"}
        />
      </article>
    </main>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
