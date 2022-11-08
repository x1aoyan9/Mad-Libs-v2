// DISPLAY ALL
import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";

const MagicDisplayAll = () => {

    const navigate = useNavigate();
    const [allMagicLibs, setAllMagicLibs] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/magic')
        .then((res) => {
            console.log(res.data);
            setAllMagicLibs(res.data);
        })
        .catch((err) => {
            console.log(err);
        });
    }, []);

    const deleteFilter = (idFromBelow) => {
        axios.delete(`http://localhost:8000/api/magic/${idFromBelow}`)
        .then((res) => {
            console.log("Successful delete");
            console.log(res.data);
            const filteredMagicLibs = allMagicLibs.filter((magicLib) => {
                return magicLib._id !== idFromBelow;
            });
            setAllMagicLibs(filteredMagicLibs);
        })
        .catch((err) => {
            console.log("An error has occured when attempting to delete the Mad Lib");
            console.log(err.res);
        });
    };

    return (
        <>
            <div>
                <div className="hidden sm:block" aria-hidden="true">
                    <div className="py-5">
                        <div className="border-t border-gray-200" />
                    </div>
                </div>
                <div className="mt-10 sm:mt-0">
                    { allMagicLibs.map((magicLib, index) => (
                        <div key={index} className="md:grid md:grid-cols-3 md:gap-6">
                            <div className="md:col-span-1">
                                <div className="px-4 sm:px-0">
                                    <h2 className="text-lg font-medium leading-6 text-gray-900">Magic, Anyone?</h2>
                                    <h3 className="mt-1 text-sm text-gray-600">By: {magicLib.yourName}</h3>
                                    <br />
                                </div>
                            </div>
                            <div className="mt-5 md:col-span-2 md:mt-0">
                                <div className="overflow-hidden shadow sm:rounded-md">
                                    <div className="bg-white px-4 py-5 sm:p-6">
                                        <p>
                                        <strong>{magicLib.pluralNoun}</strong> of all ages enjoy watching <strong>{magicLib.adjective}</strong> magicians perform their <strong>{magicLib.adjective2}</strong> tricks...
                                        </p>
                                        <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                                            <button 
                                                className="rounded-full inline-flex justify-center border border-purple bg-white mr-2 py-2 px-4 text-sm font-medium text-purple-500 shadow-sm hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2" 
                                                onClick={ () => navigate(`/magic/${magicLib._id}`) }
                                            >
                                                Expand
                                            </button>
                                            <button 
                                                className="rounded-full inline-flex justify-center border border-yellow bg-white mr-2 py-2 px-4 text-sm font-medium text-yellow-500 shadow-sm hover:bg-yellow-800 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2" 
                                                onClick={ () => navigate(`/magic/edit/${magicLib._id}`) }
                                            >
                                                Edit
                                            </button>
                                            <button 
                                                className="rounded-full inline-flex justify-center border border-indego bg-white py-2 px-4 text-sm font-medium text-blue-500 shadow-sm hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" 
                                                onClick={ () => deleteFilter(magicLib._id) }
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default MagicDisplayAll;