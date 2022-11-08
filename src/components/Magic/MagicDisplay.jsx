// DISPLAY [ONE]
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const MagicDisplay = () => {

    const {id} = useParams();
    const navigate = useNavigate();
    const [oneMagicLib, setOneMagicLib] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8000/api/magic/${id}`)
        .then((res) => {
            console.log(res.data);
            setOneMagicLib(res.data);
        })
        .catch((err) => {
            console.log(err);
        });
    }, [id]);

    const deleteHandler = () => {
        axios.delete(`http://localhost:8000/api/magic/${id}`)
        .then((res) => {
            console.log("Successful delete.");
            console.log(res.data);
            navigate("/");
        })
        .catch((err) => {
            console.log("An error has occured when attempting to delete the Mad Lib");
            console.log(err);
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
                    <div className="md:grid md:grid-cols-3 md:gap-6">
                        <div className="md:col-span-1">
                            <div className="px-4 sm:px-0">
                                <h2 className="text-lg font-medium leading-6 text-gray-900">Magic, Anyone?</h2>
                                <h3 className="mt-1 text-sm text-gray-600">By: {oneMagicLib.yourName}</h3>
                                <br />
                            </div>
                        </div>
                        <div className="mt-5 md:col-span-2 md:mt-0">
                            <div className="overflow-hidden shadow sm:rounded-md">
                                <div className="bg-white px-4 py-5 sm:p-6">
                                    <p>
                                        <strong>{oneMagicLib.pluralNoun}</strong> of all ages enjoy watching <strong>{oneMagicLib.adjective}</strong> magicians perform their <strong>{oneMagicLib.adjective2}</strong> tricks. Every 
                                        man, woman, and <strong>{oneMagicLib.noun}</strong> loves to see a magician pull a/an <strong>{oneMagicLib.noun2}</strong> out of a hatm saw a live <strong>{oneMagicLib.noun3}</strong> in half, 
                                        or make a huge <strong>{oneMagicLib.noun4}</strong> disappear into <strong>{oneMagicLib.adjective3}</strong> air. Audiences love when magicians perform sleight of <strong>{oneMagicLib.bodyPart}</strong> 
                                        withc a deck of <strong>{oneMagicLib.pluralNoun2}</strong>, a/an <strong>{oneMagicLib.adjective4}</strong> coin, or a silk <strong>{oneMagicLib.noun5}</strong>. The greatest of all magicians was the 
                                        <strong>{oneMagicLib.adjective5}</strong> Harry Houdini, who was able to escape from a locked <strong>{oneMagicLib.noun6}</strong> even though his <strong>{oneMagicLib.bodyParts}</strong> were tied 
                                        behind his <strong>{oneMagicLib.bodyPart2}</strong> and his feet were wrapped in iron <strong>{oneMagicLib.pluralNoun3}</strong>.
                                    </p>
                                </div>
                            </div>
                            <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                                <button 
                                    className="rounded-full inline-flex justify-center border border-yellow bg-white mr-2 py-2 px-4 text-sm font-medium text-yellow-500 shadow-sm hover:bg-yellow-800 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2" 
                                    onClick={ () => navigate(`/magic/edit/${oneMagicLib._id}`) }>
                                    Edit
                                </button>
                                <button 
                                    className="rounded-full inline-flex justify-center border border-indego bg-white py-2 px-4 text-sm font-medium text-indego-500 shadow-sm hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" 
                                    onClick={deleteHandler}>
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MagicDisplay;