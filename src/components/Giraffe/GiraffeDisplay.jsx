// DISPLAY [ONE]
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const GiraffeDisplay = () => {

    const {id} = useParams();
    const navigate = useNavigate();
    const [oneGiraffeLib, setOneGiraffeLib] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8000/api/giraffe/${id}`)
        .then((res) => {
            console.log(res.data);
            setOneGiraffeLib(res.data);
        })
        .catch((err) => {
            console.log(err);
        });
    }, [id]);

    const deleteHandler = () => {
        axios.delete(`http://localhost:8000/api/giraffe/${id}`)
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
                                <h2 className="text-lg font-medium leading-6 text-gray-900">Have I Got a Giraffe For You</h2>
                                <h3 className="mt-1 text-sm text-gray-600">By: {oneGiraffeLib.yourName}</h3>
                                <br />
                            </div>
                        </div>
                        <div className="mt-5 md:col-span-2 md:mt-0">
                            <div className="overflow-hidden shadow sm:rounded-md">
                                <div className="bg-white px-4 py-5 sm:p-6">
                                    <p>
                                        Giraffes have aroused the curiosity of <strong>{oneGiraffeLib.pluralNoun}</strong> since earliest times. The giraffe is the tallest of all living 
                                        <strong>{oneGiraffeLib.pluralNoun2}</strong>, but scientists are unable to explain how it got its long <strong>{oneGiraffeLib.bodyPart}</strong>. The giraffe's tremendous 
                                        height, which might reach <strong>{oneGiraffeLib.number}</strong> <strong>{oneGiraffeLib.pluralNoun3}</strong>, comes mostly from its legs and <strong>{oneGiraffeLib.bodyPart2}</strong>. 
                                        If a giraffe wants to take a drink of <strong>{oneGiraffeLib.liquid}</strong> from the ground, it has to spread its <strong>{oneGiraffeLib.bodyParts}</strong> far apart in 
                                        order to reach down and lap up the water with its huge <strong>{oneGiraffeLib.bodyPart3}</strong>. The giraffe has <strong>{oneGiraffeLib.adjective}</strong> ears that 
                                        are sensitive to the faintest <strong>{oneGiraffeLib.pluralNoun4}</strong>, and it has a/an <strong>{oneGiraffeLib.adjective2}</strong> sense of smell and sight. When 
                                        attacked, a giraffe can put up a/an <strong>{oneGiraffeLib.adjective3}</strong> fight by <strong>{oneGiraffeLib.verbEnding_ING}</strong> out with its hind legs and using 
                                        its head like a sledge <strong>{oneGiraffeLib.noun}</strong>. Finally, a giraffe can gallop at more than thirty <strong>{oneGiraffeLib.pluralNoun5}</strong> an hour when 
                                        pursued and can outrun the fastest <strong>{oneGiraffeLib.noun2}</strong>.
                                    </p>
                                </div>
                            </div>
                            <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                                <button 
                                className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" 
                                onClick={ () => navigate(`/band/edit/${oneGiraffeLib._id}`) }
                                >
                                    Edit
                                </button>
                                <button 
                                className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" 
                                onClick={deleteHandler}
                                >
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

export default GiraffeDisplay;