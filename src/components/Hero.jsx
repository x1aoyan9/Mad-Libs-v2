import React from 'react';
import ButtonRandom from './ButtonRandom';
import AnimatedHeader from './Header/AnimatedHeader';
import AnimatedBooks from './BookLineUp';

const Landing = () => {
    return (
        <section className="relative overflow-hidden">
            <main className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                <div className="sm:text-center lg:text-left">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                        <span><AnimatedHeader /></span>
                    </h1>
                </div>
            </main>
            <br />
            <body>
                <div>
                    <ButtonRandom/>
                </div>
            </body>
        </section>
    );
};

export default Landing;