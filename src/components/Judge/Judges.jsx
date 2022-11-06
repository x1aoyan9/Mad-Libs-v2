import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Judges = () => {
    return (
        <div className='container'>
            <Header />
            <video id="judgeVid" loop muted autoPlay>
                <source
                    src={judge} type="video/mp4" alt="singer"
                />
            </video>

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
