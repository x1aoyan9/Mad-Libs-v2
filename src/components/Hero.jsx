import React from 'react';
import BookLineUp from './BookLineUp';


const Landing = () => {
    return (
        <div className="px-6 px-5">
            <body className="mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                <div className="sm:text-center lg:text-left flex justify-evenly">
                    <BookLineUp />
                </div>
            </body>
            <br/>
        </div>
    );
};

export default Landing;