import React from 'react'
import Book1 from "./OpeningBooks/Book1";
import Book2 from "./OpeningBooks/Book2";
import Book3 from "./OpeningBooks/Book3";
import Book4 from "./OpeningBooks/Book4";
import Book5 from "./OpeningBooks/Book5";
import Book6 from "./OpeningBooks/Book6";
import Book7 from "./OpeningBooks/Book7";
import {  Link } from 'react-router-dom';

const BookShelf = () => {

    return (
        <div className="h-full lg:col-span-7 mb-12 pb-12">
            <div className="flex">
                <div className="mr-3 cursor-pointer hover:scale-105 ease-in-out duration-300">
                    <Link to={`band/new`}><Book1/></Link>
                </div>
                <div className="mr-3 cursor-pointer hover:scale-105 ease-in-out duration-300">
                    <Link to={`giraffe/new`}><Book2 /></Link>
                </div>
                <div className="mr-3 cursor-pointer hover:scale-105 ease-in-out duration-300">
                    <Link to={`judge/new`}><Book3 /></Link>
                </div>
                <div className="mr-3 cursor-pointer hover:scale-105 ease-in-out duration-300">
                    <Link to={`magic/new`}><Book4 /></Link>
                </div>
            </div>
            <div className="flex ml-10 pl-10 mt-10">
                <div className="mr-3 cursor-pointer hover:scale-105 ease-in-out duration-300">
                    <Link to={`movie/new`}><Book5 /></Link>
                </div>
                <div className="mr-3 cursor-pointer hover:scale-105 ease-in-out duration-300">
                    <Link to={`vacation/new`}><Book6 /></Link>
                </div>
                <div className="cursor-pointer hover:scale-105 ease-in-out duration-300">
                    <Link to={`wonder/new`}><Book7 /></Link>
                </div>
            </div>
        </div>
    );
};

export default BookShelf;