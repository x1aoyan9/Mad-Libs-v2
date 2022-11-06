import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Giraffes = () => {
    return (
        <div className='container'>

            <div id="giraffeNav">
                <Link to="/giraffe/new">Create</Link>
                <Link to="/giraffe/:id">Read</Link>
                <Link to="/giraffe/edit/:id">Edit</Link>
            </div>

            <Outlet />
        </div>
    )
}

export default Giraffes
