// DISPLAY [ONE]
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const VacationDisplay = () => {

    const {id} = useParams();
    const navigate = useNavigate();
    const [oneVacationLib, setOneVacationLib] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8000/api/vacation/${id}`)
        .then((res) => {
            console.log(res.data);
            setOneVacationLib(res.data);
        })
        .catch((err) => {
            console.log(err);
        });
    }, [id]);

    const deleteHandler = () => {
        axios.delete(`http://localhost:8000/api/vacation/${id}`)
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
                                <h2 className="text-lg font-medium leading-6 text-gray-900">Family Vacation</h2>
                                <h3 className="mt-1 text-sm text-gray-600">By: {oneVacationLib.yourName}</h3>
                                <br />
                            </div>
                        </div>
                        <div className="mt-5 md:col-span-2 md:mt-0">
                            <div className="overflow-hidden shadow sm:rounded-md">
                                <div className="bg-white px-4 py-5 sm:p-6">
                                    <p>
                                        A vacation is when you take a trip to some <strong>{oneVacationLib.adjective}</strong> place with your <strong>{oneVacationLib.adjective2}</strong> family. Usually you go to some place that 
                                        is near a/an <strong>{oneVacationLib.noun}</strong> or up on a/an <strong>{oneVacationLib.noun2}</strong>. A good vacation place is one where you can ride <strong>{oneVacationLib.pluralNoun}</strong> 
                                        or play <strong>{oneVacationLib.game}</strong> or go hunting for <strong>{oneVacationLib.pluralNoun2}</strong>. I like to spend my time <strong>{oneVacationLib.verbEnding_ING}</strong> or 
                                        <strong>{oneVacationLib.verbEnding_ING2}</strong>. When parents go on a vacation, they spend their time eating three <strong>{oneVacationLib.pluralNoun3}</strong> a day, and fathers play 
                                        golf, and mothers sit around <strong>{oneVacationLib.verbEnding_ING3}</strong>. Last summer, my little brother fell in a/an <strong>{oneVacationLib.noun3}</strong> and got poison 
                                        <strong>{oneVacationLib.plant}</strong> all over his <strong>{oneVacationLib.bodyPart}</strong>. My family is going to go to [the] <strong>{oneVacationLib.location}</strong>, and I will practice 
                                        <strong>{oneVacationLib.verbEnding_ING4}</strong>. Parents need vacations more than kids because parents are always very <strong>{oneVacationLib.adjective3}</strong> and because they have 
                                        to work <strong>{oneVacationLib.number}</strong> hours every day all year making enough <strong>{oneVacationLib.pluralNoun4}</strong> to pay for the vacation.
                                    </p>
                                </div>
                            </div>
                            <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                                <button 
                                    className="rounded-full inline-flex justify-center border border-yellow bg-white mr-2 py-2 px-4 text-sm font-medium text-yellow-500 shadow-sm hover:bg-yellow-800 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2" 
                                    onClick={ () => navigate(`/vacation/edit/${oneVacationLib._id}`) }>
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
    )
}

export default VacationDisplay
