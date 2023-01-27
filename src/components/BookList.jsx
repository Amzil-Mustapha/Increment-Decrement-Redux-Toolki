import React from "react";
import Book from "./Book";

import { books } from "./booksData";

export default function BookList() {
  return (
    <section className="bookList">
      {books.map((book) => {
        return <Book key={book.id} {...book} />;
      })}
    </section>
  );
}
