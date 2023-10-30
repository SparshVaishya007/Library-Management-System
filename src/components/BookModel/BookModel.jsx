import { Link } from "react-router-dom";
import { getUser, isAuth } from "../../core/authenication";

import { FiEdit } from "react-icons/fi";
import { BsTrashFill } from "react-icons/bs";
import { VscOpenPreview } from "react-icons/vsc";

import "./BookModel.css";

const BookModel = ({ isbn, bookID, rackNumber, title, author, category, cover, remove }) => {
  return (
    <section className="book-model">
      <img src={cover} alt="Book_Cover" />
      <section className="model-cover text-white">
        <h5 className="mb-1">{title}</h5>
        <p className="model-text">{author}</p>
        <p className="model-text">{category}</p>
      </section>
      <section className="model-content">
        <section className="model-content-heading text-lightblue">
          <h5 className="model-title mb-0">ISBN {isbn}</h5>
          <p className="model-text">Rack {rackNumber}</p>
        </section>
        <section className="model-content-icons text-lightblue">
          <Link className="text-lightblue content-icon" to={"/pages/home/book/" + bookID}>
            <VscOpenPreview className="fs-2" title="View book" />
          </Link>
        </section>
      </section>
      {isAuth() && getUser().type == "librarian" && (
        <>
          <span className="edit-icon">
            <Link className="text-lightblue" to={"/pages/options/update-book/" + bookID}>
              <FiEdit />
            </Link>
          </span>
          <span className="trash-icon text-lightblue">
            <BsTrashFill onClick={() => remove(bookID)} />
          </span>
        </>
      )}
    </section>
  );
};

export default BookModel;
