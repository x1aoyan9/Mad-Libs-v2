import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Magics = () => {
    return (
        <div className="container">

            <div id="magicNav">
                <Link to="/magic/new">Create</Link>
                <Link to="/magic/:id">Read</Link>
                <Link to="/magic/edit/:id">Edit</Link>
            </div>

            <Outlet />
        </div>
    )
}

export default Magics
