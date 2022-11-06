import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Judges = () => {
    return (
        <div className='container'>

            <div id="judgeNav">
                <Link to="/judge/new">Create</Link>
                <Link to="/judge/:id">Read</Link>
                <Link to="/judge/edit/:id">Edit</Link>
            </div>

            <Outlet />
        </div>
    )
}

export default Judges
