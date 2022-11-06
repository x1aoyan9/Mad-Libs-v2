import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Vacations = () => {
    return (
        <div className="container">
            <Header />
            <video id="vacationVid" loop muted autoPlay>
                <source
                    src={vacation} type="video/mp4" alt="mother and child silhouettes against blue sky"
                />
            </video>

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
