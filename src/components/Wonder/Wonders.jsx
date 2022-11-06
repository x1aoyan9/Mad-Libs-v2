import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Wonders = () => {
    return (
        <div className="container">

            <nav id="wonderNav">
                <Link to="/wonder/new">Create</Link>
                <Link to="/wonder/:id">Read</Link>
                <Link to="/wonder/edit/:id">Edit</Link>
            </nav>

            <Outlet />
        </div>
    )
}

export default Wonders
