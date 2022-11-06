import React from 'react';
import { Link, Outlet } from 'react-router-dom';


function Bands() {
    return(

        <div className='container'>

            <div id="bandNav">
                <Link to="/band/new">Create</Link>
                <Link to="/band/:id">Read</Link>
                <Link to="/band/edit/:id">Edit</Link>
            </div>

                <Outlet />
        </div>
    );
};

export default Bands;