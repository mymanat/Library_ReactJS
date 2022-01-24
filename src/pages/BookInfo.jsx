import React from 'react';
import Bestbooks from '../components/ui/BestBooks';
import Price from '../components/ui/Price';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Ratings from '../components/ui/Ratings';
import {useParams} from "react-router";
import {Link} from "react-router-dom";

const Bookinfo = ({books, addItemToCart}) => {
    const {id}= useParams();
    const book= books.find((book)=> +book.id===+id);

    return (
        <div id="books__body">
            <main id="books__main">
                <div className="books__container">
                    <div className="row">
                        <div className="book__selected--top">
                            <Link to="/books" className="book__link">
                                <FontAwesomeIcon icon="arrow-left" />
                            </Link>
                            <Link to="/books" className="book__link">
                                <h2 className="book__selected--title--top">Books</h2>
                            </Link>
                        </div>
                        <div className="book__selected">
                            <figure className="book__selected--figure">
                                <img src={book.url} alt="" className="book__selected--img" />
                            </figure>
                            <div className="book__selected--description">
                                <h2 className="book__selected--title">{book.title}</h2>
                                <Ratings rating={book.rating} />
                                <div className="book__selected--price">
                                    <Price
                                        originalPrice={book.originalPrice}
                                        salePrice={book.salePrice}
                                    />
                                </div>
                                <div className="book__summary">
                                    <h3 className="book__summary--title">Summary</h3>
                                    <p className="book__summary--para">
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias quas pariatur dignissimos, eos, laborum dolorem sit ex nostrum vitae odit doloremque quo, voluptatum magnam officia suscipit. Recusandae qui unde quasi!
                                    </p>
                                    <p className="book__summary--para">
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias quas pariatur dignissimos, eos, laborum dolorem sit ex nostrum vitae odit doloremque quo, voluptatum magnam officia suscipit. Recusandae qui unde quasi!
                                    </p>
                                </div>
                                <button className="btn" onClick={()=>addItemToCart(book)}>
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="books__container">
                    <div className="row">
                        <div className="book__selected--top">
                            <h2 className="book__selected--title--top">Recommended Books</h2>
                        </div>
                        <Bestbooks id={id} />
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Bookinfo;
