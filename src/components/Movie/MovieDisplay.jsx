// DISPLAY [ONE]
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const MovieDisplay = () => {

    const {id} = useParams();
    const navigate = useNavigate();
    const [oneMovieLib, setOneMovieLib] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8000/api/movie/${id}`)
        .then((res) => {
            console.log(res.data);
            setOneMovieLib(res.data);
        })
        .catch((err) => {
            console.log(err);
        });
    }, [id]);

    const deleteHandler = () => {
        axios.delete(`http://localhost:8000/api/movie/${id}`)
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
                                <h2 className="text-lg font-medium leading-6 text-gray-900">Movies Should Be Fun</h2>
                                <h3 className="mt-1 text-sm text-gray-600">By: {oneMovieLib.yourName}</h3>
                                <br />
                            </div>
                        </div>
                        <div className="mt-5 md:col-span-2 md:mt-0">
                            <div className="overflow-hidden shadow sm:rounded-md">
                                <div className="bg-white px-4 py-5 sm:p-6">
                                    <p>
                                        In recent years, there have been too many disaster movies in which <strong>{oneMovieLib.pluralNoun}</strong> catch on fire, <strong>{oneMovieLib.adjective}</strong> 
                                        dinosaurs come to life, and huge <strong>{oneMovieLib.pluralNoun2}</strong> attack people in the ocean making you afraid to get out of your <strong>{oneMovieLib.noun}</strong> 
                                        in the morning. Movie fans ask why we can't have more <strong>{oneMovieLib.adjective2}</strong> pictures like It's a Wonderful <strong>{oneMovieLib.noun2}</strong>, Gone 
                                        with the <strong>{oneMovieLib.noun3}</strong>, or <strong>{oneMovieLib.name}</strong> Goes to <strong>{oneMovieLib.location}</strong>. These films made you feel 
                                        <strong>{oneMovieLib.adjective3}</strong> all over. These same fans also ask why we can't have more funny films with comedians such as Laruel and <strong>{oneMovieLib.name2}</strong>, 
                                        and Abbott and <strong>{oneMovieLib.name3}</strong>. These <strong>{oneMovieLib.adjective4}</strong> performers gave us great slapstick <strong>{oneMovieLib.pluralNoun3}</strong> 
                                        that still makes our <strong>{oneMovieLib.bodyParts}</strong> ache from laughing.
                                    </p>
                                </div>
                            </div>
                            <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                                <button 
                                    className="rounded-full inline-flex justify-center border border-yellow bg-white mr-2 py-2 px-4 text-sm font-medium text-yellow-500 shadow-sm hover:bg-yellow-800 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2" 
                                    onClick={ () => navigate(`/movie/edit/${oneMovieLib._id}`) }>
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

export default MovieDisplay;