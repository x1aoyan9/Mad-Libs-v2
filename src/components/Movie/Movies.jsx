import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Movies = () => {
    return (
        <div className="container">
            <nav id="movieNav" className="flex justify-center">
                <Link to="/movie/new" className="bg-white border border-emerald text-emerald-400 hover:bg-emerald-800 py-1 px-2 rounded-full mx-1 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2">Create</Link>
                <Link to="/movie/:id" className="bg-white border border-blue text-blue-400 hover:bg-blue-800 py-1 px-2 rounded-full mx-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">Read</Link>
                <Link to="/movie/edit/:id" className="bg-white border border-red text-red-400 hover:bg-red-800 py-1 px-2 rounded-full mx-1 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">Edit</Link>
            </nav>
            <Outlet />
        </div>
    );
};

export default Movies;