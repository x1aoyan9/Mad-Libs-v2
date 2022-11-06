// DISPLAY ALL
import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";

const GiraffeDisplayAll = () => {

    const navigate = useNavigate();
    const [allGiraffeLibs, setAllGiraffeLibs] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/giraffe')
        .then((res) => {
            console.log(res.data);
            setAllGiraffeLibs(res.data);
        })
        .catch((err) => {
            console.log(err);
        });
    }, []);

    const deleteFilter = (idFromBelow) => {
        axios.delete(`http://localhost:8000/api/giraffe/${idFromBelow}`)
        .then((res) => {
            console.log("Successful delete");
            console.log(res.data);
            const filteredGiraffeLibs = allGiraffeLibs.filter((giraffeLib) => {
                return giraffeLib._id !== idFromBelow;
            });
            setAllGiraffeLibs(filteredGiraffeLibs);
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
                    { allGiraffeLibs.map((giraffeLib, index) => (
                        <div key={index} className="md:grid md:grid-cols-3 md:gap-6">
                            <div className="md:col-span-1">
                                <div className="px-4 sm:px-0">
                                    <h2 className="text-lg font-medium leading-6 text-gray-900">Have I Got a Giraffe For You</h2>
                                    <br />
                                </div>
                            </div>
                            <div className="mt-5 md:col-span-2 md:mt-0">
                                <div className="overflow-hidden shadow sm:rounded-md">
                                    <div className="bg-white px-4 py-5 sm:p-6">
                                        <p>By: {giraffeLib.yourName}</p>
                                        <p>
                                            Giraffes have aroused the curiosity of <strong>{giraffeLib.pluralNoun}</strong> since earliest times. The giraffe is the tallest of all living 
                                            <strong>{giraffeLib.pluralNoun2}</strong>, but scientists are unable to explain how it got its long <strong>{giraffeLib.bodyPart}</strong>...
                                        </p>
                                        <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                                            <button 
                                                className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" 
                                                onClick={ () => navigate(`/giraffe/${giraffeLib._id}`) }
                                            >
                                                Expand
                                            </button>
                                            <button 
                                                className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" 
                                                onClick={ () => navigate(`/giraffe/edit/${giraffeLib._id}`) }
                                            >
                                                Edit
                                            </button>
                                            <button 
                                                className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" 
                                                onClick={ () => deleteFilter(giraffeLib._id) }
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

export default GiraffeDisplayAll;