import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Magics = () => {
    return (
        <div className="container">
            <Header />
            <video id="magicVid" loop muted autoPlay>
                <source
                    src={magic} type="video/mp4" alt="magician performing a card trick"
                />
            </video>

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
