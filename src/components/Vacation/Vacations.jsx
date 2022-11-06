import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Vacations = () => {
    return (
        <div className="container">

            <nav id="vacationNav">
                <Link to="/vacation/new">Create</Link>
                <Link to="/vacation/:id">Read</Link>
                <Link to="/vacation/edit/:id">Edit</Link>
            </nav>

            <Outlet />
        </div>
    )
}

export default Vacations
