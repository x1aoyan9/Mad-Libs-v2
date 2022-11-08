// DISPLAY [ONE]
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const WonderDisplay = () => {

    const {id} = useParams();
    const navigate = useNavigate();
    const [oneWonderLib, setOneWonderLib] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8000/api/wonder/${id}`)
        .then((res) => {
            console.log(res.data);
            setOneWonderLib(res.data);
        })
        .catch((err) => {
            console.log(err);
        });
    }, [id]);

    const deleteHandler = () => {
        axios.delete(`http://localhost:8000/api/wonder/${id}`)
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
                                <h2 className="text-lg font-medium leading-6 text-gray-900">Story of the One-Hit Wonder</h2>
                                <h3 className="mt-1 text-sm text-gray-600">By: {oneWonderLib.yourName}</h3>
                                <br />
                            </div>
                        </div>
                        <div className="mt-5 md:col-span-2 md:mt-0">
                            <div className="overflow-hidden shadow sm:rounded-md">
                                <div className="bg-white px-4 py-5 sm:p-6">
                                    <p>
                                        The Mighty <strong>{oneWonderLib.pluralNoun}</strong> were a one-<strong>{oneWonderLib.noun}</strong> wonder, famous for their <strong>{oneWonderLib.adjective}</strong> song, 
                                        "In Your <strong>{oneWonderLib.bodyPart}</strong>." Where is this <strong>{oneWonderLib.adjective2}</strong> band today? After hitting it big, they started to have 
                                        <strong>{oneWonderLib.adjective3}</strong> creative differences. They went from superstardom to a/an <strong>{oneWonderLib.noun2}</strong>-shattering breakup. 
                                        The lead singer, known for his <strong>{oneWonderLib.adjective4}</strong> personality, wanted to change the band's name to <strong>{oneWonderLib.name}</strong>'s 
                                        <strong>{oneWonderLib.pluralNoun2}</strong>. The rest of the band <strong>{oneWonderLib.advern}</strong> refused. No one could see eye to <strong>{oneWonderLib.bodyPart2}</strong>, 
                                        and the bassist decided to leave the <strong>{oneWonderLib.adjective5}</strong> band and pursue his lifelong dream of professional only one left. 
                                        <strong>{oneWonderLib.noun3}</strong>-weaving. The drummer left to leach music to high school <strong>{oneWonderLib.pluralNoun3}</strong>. The lead singer was the 
                                        But don't feel too bad - he has now become a/an <strong>{oneWonderLib.adjective6}</strong> Inernet sensation with a video of himself playing "Sweet Home, (the) 
                                        <strong>{oneWonderLib.location}</strong>" on the Kazoo!
                                    </p>
                                </div>
                            </div>
                            <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                                <button 
                                    className="rounded-full inline-flex justify-center border border-yellow bg-white mr-2 py-2 px-4 text-sm font-medium text-yellow-500 shadow-sm hover:bg-yellow-800 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2" 
                                    onClick={ () => navigate(`/wonder/edit/${oneWonderLib._id}`) }>
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

export default WonderDisplay;