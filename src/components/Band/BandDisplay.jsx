// DISPLAY [ONE]
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const BandDisplay = () => {

    const {id} = useParams();
    const navigate = useNavigate();
    const [oneBandLib, setOneBandLib] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8000/api/band/${id}`)
        .then((res) => {
            console.log(res.data);
            setOneBandLib(res.data);
        })
        .catch((err) => {
            console.log(err);
        });
    }, [id]);

    const deleteHandler = () => {
        axios.delete(`http://localhost:8000/api/band/${id}`)
        .then((res) => {
            console.log("Successful delete");
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
                                <h2 className="text-lg font-medium leading-6 text-gray-900">Family Rock Band</h2>
                                <h3 className="mt-1 text-sm text-gray-600">By: {oneBandLib.yourName}</h3>
                                <br />
                            </div>
                        </div>
                        <div className="mt-5 md:col-span-2 md:mt-0">
                            <div className="overflow-hidden shadow sm:rounded-md">
                                <div className="bg-white px-4 py-5 sm:p-6">
                                    <p>
                                        I don't come from your average <strong>{oneBandLib.adjective}</strong> family. That's because we're all part of the <strong>{oneBandLib.name}</strong> Family rock band and 
                                        we lead a very <strong>{oneBandLib.adjective2}</strong> life. For example, by not shaving his <strong>{oneBandLib.noun}</strong> every morning, my dad saves enough time 
                                        to practice the <strong>{oneBandLib.adjective3}</strong> drums. My brother doesn't participate in extracurricular <strong>{oneBandLib.pluralNoun}</strong> at school because 
                                        he plays the electric <strong>{oneBandLib.noun2}</strong>. My <strong>{oneBandLib.adjective4}</strong> sister doesn't have time to date <strong>{oneBandLib.pluralNoun2}</strong> 
                                        because she sings lead vocals and practices for 4 to 5 hours every <strong>{oneBandLib.noun3}</strong>. When I'm not writing our <strong>{oneBandLib.adjective5}</strong> songs, 
                                        I'm tickling the <strong>{oneBandLib.pluralNoun3}</strong> on the keyboard, so I don't have any free time either. Finally, Mom is our <strong>{oneBandLib.adjective6}</strong> 
                                        manager. She books our band to play at weddings, <strong>{oneBandLib.adjective7}</strong> sixteens, and <strong>{oneBandLib.noun4}</strong> mitzvahs. Maybe someday, if we 
                                        practice <strong>{oneBandLib.adverb}</strong> enough, we'll get to make a music video for <strong>{oneBandLib.letter}</strong>-TV and play sold-out shows at Madison Square 
                                        <strong>{oneBandLib.noun5}</strong>!
                                    </p>
                                </div>
                            </div>
                            <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                                <button className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" onClick={ () => navigate(`/band/edit/${oneBandLib._id}`) }>
                                    Edit
                                </button>
                                <button className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" onClick={deleteHandler}>
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

export default BandDisplay;