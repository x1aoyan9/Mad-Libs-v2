import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Wonders = () => {
    return (
        <div className="container">
            <nav id="wonderNav" className="flex justify-center">
                <Link to="/wonder/new" className="bg-white border border-emerald text-emerald-400 hover:bg-emerald-800 py-1 px-2 rounded-full mx-1 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2">Create</Link>
            </nav>
            <Outlet />
        </div>
    );
};

export default Wonders;