import React from 'react';
import BookShelf from './BookShelf';


const Landing = () => {

    return (
        <>
            <div className="mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                <div className="sm:text-center lg:text-center">
                    <h2 className="text-xl font-bold tracking-tight text-gray-900">Choose Your Story</h2>
                </div>
                <br /> <hr />
            </div>
            <body className="max-w-screen-xl px-2 mb-5 pb-8 lg:pb-24">
                <BookShelf />
            </body>
            <footer className="bg-gray-800 flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
                <div className="max-w-screen-xl p-4 py-6 mx-auto lg:py-16 md:p-8 lg:p-10">
                    <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
                        <div className="pt-6 mt-6 space-y-4 border-t border-gray-200 dark:border-gray-700">
                            <h3 className="mb-6 text-md font-semibold text-white-900 uppercase cursor-pointer">Company</h3>
                            <ul className="text-gray-500 dark:text-gray-400">
                                <li className="mb-4">
                                    <p className="hover:text-white ease-in-out cursor-pointer">About</p>
                                </li>
                                <li className="mb-4">
                                    <p className="hover:text-white ease-in-out cursor-pointer">Careers</p>
                                </li>
                                <li className="mb-4">
                                    <p className="hover:text-white ease-in-out cursor-pointer">Brand Center</p>
                                </li>
                                <li className="mb-4">
                                    <p className="hover:text-white ease-in-out cursor-pointer">Blog</p>
                                </li>
                            </ul>
                        </div>
                        <div className="pt-6 mt-6 space-y-4 border-t border-gray-200 dark:border-gray-700">
                            <h3 className="mb-6 text-md font-semibold text-white-900 uppercase cursor-pointer">Legal</h3>
                            <ul className="text-gray-500 dark:text-gray-400">
                                <li className="mb-4">
                                    <p className="hover:text-white ease-in-out cursor-pointer">Privacy Policy</p>
                                </li>
                                <li className="mb-4">
                                    <p className="hover:text-white ease-in-out cursor-pointer">Licensing</p>
                                </li>
                                <li className="mb-4">
                                    <p className="hover:text-white ease-in-out cursor-pointer">Terms</p>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <hr className="pt-6 mt-6 space-y-4 border-t border-gray-200 dark:border-gray-700"></hr>
                            <h3 className="mb-6 text-md font-semibold text-white-900 uppercase cursor-pointer">Copyright</h3>
                            <div className="text-center">
                                <span className="block text-sm text-center text-gray-500 dark:text-gray-400">© 2021-2022 Landwind™. All Rights Reserved. Built with <a href="https://flowbite.com" class="text-purple-600 hover:underline dark:text-purple-500">Flowbite</a> and <a href="https://tailwindcss.com" class="text-purple-600 hover:underline dark:text-purple-500">Tailwind CSS</a>. Distributed by <a href="https://themewagon.com/" class="text-purple-600 hover:underline dark:text-purple-500">ThemeWagon</a></span>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Landing;