// DISPLAY [ONE]
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';


const JudgeDisplay = () => {

    const {id} = useParams();
    const navigate = useNavigate();
    const [oneJudgeLib, setOneJudgeLib] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8000/api/judge/${id}`)
        .then((res) => {
            console.log(res.data);
            setOneJudgeLib(res.data);
        })
        .catch((err) => {
            console.log(err);
        });
    }, [id]);

    const deleteHandler = () => {
        axios.delete(`http://localhost:8000/api/judge/${id}`)
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
                                <h2 className="text-lg font-medium leading-6 text-gray-900">Judges' Decision</h2>
                                <h3 className="mt-1 text-sm text-gray-600">By: {oneJudgeLib.yourName}</h3>
                                <br />
                            </div>
                        </div>
                        <div className="mt-5 md:col-span-2 md:mt-0">
                            <div className="overflow-hidden shadow sm:rounded-md">
                                <div className="bg-white px-4 py-5 sm:p-6">
                                    <p>
                                        When it was my turn to audition for <strong>{oneJudgeLib.noun}</strong> Idol, the reality show where people compete to be the best solo <strong>{oneJudgeLib.noun2}</strong>, I sang from the 
                                        depths of my very <strong>{oneJudgeLib.bodyPart}</strong>. When my song ended, I could hardly catch my <strong>{oneJudgeLib.noun3}</strong> as I <strong>{oneJudgeLib.adverb}</strong> awaited 
                                        the judges' responses. First, <strong>{oneJudgeLib.fName}</strong> was very kind. She said, "Well, the good news is that you look <strong>{oneJudgeLib.adjective}</strong>, and you really 
                                        connected with the <strong>{oneJudgeLib.pluralNoun}</strong> in the song." Then <strong>{oneJudgeLib.name}</strong> said, "You know, <strong>{oneJudgeLib.animal}</strong>, I dug your 
                                        <strong>{oneJudgeLib.pluralNoun2}</strong>," and I thought I really have a chance to make it to (the) <strong>{oneJudgeLib.location}</strong>! But then mean, old <strong>{oneJudgeLib.name2}</strong> 
                                        said, "Horrid. Terrible. <strong>{oneJudgeLib.adjective2}</strong>. You sounded like an animal trapped inside a/an <strong>{oneJudgeLib.noun4}</strong>." I gasped and shouted, "Well, you just 
                                        don't know anything about <strong>{oneJudgeLib.noun5}</strong>!" I stormed out of the <strong>{oneJudgeLib.noun6}</strong>. I was going to make it as a/an <strong>{oneJudgeLib.adjective3}</strong> 
                                        singer whether that judge from <strong>{oneJudgeLib.noun}</strong> Idol liked me or not!
                                    </p>
                                </div>
                            </div>
                            <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                                <button 
                                    className="rounded-full inline-flex justify-center border border-yellow bg-white mr-2 py-2 px-4 text-sm font-medium text-yellow-500 shadow-sm hover:bg-yellow-800 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2" 
                                    onClick={ () => navigate(`/judge/edit/${oneJudgeLib._id}`) }>
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

export default JudgeDisplay;