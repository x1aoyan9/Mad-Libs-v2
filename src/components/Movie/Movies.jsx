import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Movies = () => {
    return (
        <div className="container">

            <nav id="movieNav">
                <Link to="/movie/new">Create</Link>
                <Link to="/movie/:id">Read</Link>
                <Link to="/movie/edit/:id">Edit</Link>
            </nav>

            <Outlet />
        </div>
    )
}

export default Movies
