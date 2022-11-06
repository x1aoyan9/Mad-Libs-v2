// UPDATE
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';


const BandUpdate = (props) => {

    const {id} = useParams();

    const [yourName, setYourName] = useState("");
    const [adjective, setAdjective] = useState("");
    const [name, setName] = useState("");
    const [adjective2, setAdjective2] = useState("");
    const [noun, setNoun] = useState("");
    const [adjective3, setAdjective3] = useState("");
    const [pluralNoun, setPluralNoun] = useState("");
    const [noun2, setNoun2] = useState("");
    const [adjective4, setAdjective4] = useState("");
    const [pluralNoun2, setPluralNoun2] = useState("");
    const [noun3, setNoun3] = useState("");
    const [adjective5, setAdjective5] = useState("");
    const [pluralNoun3, setPluralNoun3] = useState("");
    const [adjective6, setAdjective6] = useState("");
    const [adjective7, setAdjective7] = useState("");
    const [noun4, setNoun4] = useState("");
    const [adverb, setAdverb] = useState("");
    const [letter, setLetter] = useState("");
    const [noun5, setNoun5] = useState("");

    const navigate = useNavigate();
    const [writer, setWriter] = useState("");

    useEffect(() => {
        axios.get(`http://localhost:8000/api/band/${id}`)
        .then((res) => {
            console.log(res.data);

            setYourName(res.data.yourName);
            setAdjective(res.data.adjective);
            setName(res.data.name);
            setAdjective2(res.data.adjective2);
            setNoun(res.data.noun);
            setAdjective3(res.data.adjective3);
            setPluralNoun(res.data.pluralNoun);
            setNoun2(res.data.noun2);
            setAdjective4(res.data.adjective4);
            setPluralNoun2(res.data.pluralNoun2);
            setNoun3(res.data.noun3);
            setAdjective5(res.data.adjective5);
            setPluralNoun3(res.data.pluralNoun3);
            setAdjective6(res.data.adjective6);
            setAdjective7(res.data.adjective7);
            setNoun4(res.data.noun4);
            setAdverb(res.data.adverb);
            setLetter(res.data.letter);
            setNoun5(res.data.noun5);
            setWriter(res.data.yourName);
        })
        .catch((err) => {
            console.log(err);
        });
    }, []);

    const onSubmitHandler = (e) => {
        e.preventDefault();

        axios.put(`http://localhost:8000/api/band/${id}`, {
            yourName,
            adjective,
            name,
            adjective2,
            noun,
            adjective3,
            pluralNoun,
            noun2,
            adjective4,
            pluralNoun2,
            noun3,
            adjective5,
            pluralNoun3,
            adjective6,
            adjective7,
            noun4,
            adverb,
            letter,
            noun5,
            writer,
        })
        .then((res) => {
            console.log(res);
            console.log(res.data);
            navigate('/');
        })
        .catch((err) => {
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
                                <h3 className="mt-1 text-sm text-gray-600">Edit your answers.</h3>
                                <br /> <hr />
                            </div>
                        </div>
                        <div className="mt-5 md:col-span-2 md:mt-0">
                            <form onSubmit={onSubmitHandler}>
                                <div className="overflow-hidden shadow sm:rounded-md">
                                    <div className="bg-white px-4 py-5 sm:p-6">
                                        <div className="grid grid-cols-6 gap-6">
                                            <div className="col-span-6 sm:col-span-3">
                                                <label className="block text-sm font-medium text-gray-700">
                                                    Your Name :
                                                </label>
                                                <input
                                                    type="text" 
                                                    className="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" 
                                                    name="yourName" value={yourName} onChange={(e) => setYourName(e.target.value)} required 
                                                />
                                            </div>
                                            <div className="col-span-6 sm:col-span-3">
                                                <label className="block text-sm font-medium text-gray-700">
                                                    Adjective :
                                                </label>
                                                <input
                                                    type="text" 
                                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" 
                                                    name="adjective" value={adjective} onChange={(e) => setAdjective(e.target.value)} required 
                                                />
                                            </div>
                                            <div className="col-span-6 sm:col-span-3">
                                                <label className="block text-sm font-medium text-gray-700">
                                                    Random Name :
                                                </label>
                                                <input
                                                    type="text" 
                                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" 
                                                    name="name" value={name} onChange={(e) => setName(e.target.value)} required 
                                                />
                                            </div>
                                            <div className="col-span-6 sm:col-span-3">
                                                <label className="block text-sm font-medium text-gray-700">
                                                    Adjective :
                                                </label>
                                                <input
                                                    type="text" 
                                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" 
                                                    name="adjective2" value={adjective2} onChange={(e) => setAdjective2(e.target.value)} required 
                                                />
                                            </div>
                                            <div className="col-span-6 sm:col-span-3">
                                                <label className="block text-sm font-medium text-gray-700">
                                                    Noun :
                                                </label>
                                                <input
                                                    type="text" 
                                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" 
                                                    name="noun" value={noun} onChange={(e) => setNoun(e.target.value)} required 
                                                />
                                            </div>
                                            <div className="col-span-6 sm:col-span-3">
                                                <label className="block text-sm font-medium text-gray-700">
                                                    Adjective :
                                                </label>
                                                <input
                                                    type="text" 
                                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" 
                                                    name="adjective3" value={adjective3} onChange={(e) => setAdjective3(e.target.value)} required 
                                                />
                                            </div>
                                            <div className="col-span-6 sm:col-span-3">
                                                <label className="block text-sm font-medium text-gray-700">
                                                    Plural Noun :
                                                </label>
                                                <input
                                                    type="text" 
                                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" 
                                                    name="pluralNoun" value={pluralNoun} onChange={(e) => setPluralNoun(e.target.value)} required 
                                                />
                                            </div>
                                            <div className="col-span-6 sm:col-span-3">
                                                <label className="block text-sm font-medium text-gray-700">
                                                    Noun :
                                                </label>
                                                <input
                                                    type="text" 
                                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" 
                                                    name="noun2" value={noun2} onChange={(e) => setNoun2(e.target.value)} required 
                                                />
                                            </div>
                                            <div className="col-span-6 sm:col-span-3">
                                                <label className="block text-sm font-medium text-gray-700">
                                                    Adjective :
                                                </label>
                                                <input
                                                    type="text" 
                                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" 
                                                    name="adjective4" value={adjective4} onChange={(e) => setAdjective4(e.target.value)} required 
                                                />
                                            </div>
                                            <div className="col-span-6 sm:col-span-3">
                                                <label className="block text-sm font-medium text-gray-700">
                                                    Plural Noun :
                                                </label>
                                                <input
                                                    type="text" 
                                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" 
                                                    name="pluralNoun2" value={pluralNoun2} onChange={(e) => setPluralNoun2(e.target.value)} required 
                                                />
                                            </div>
                                            <div className="col-span-6 sm:col-span-3">
                                                <label className="block text-sm font-medium text-gray-700">
                                                    Noun3 :
                                                </label>
                                                <input
                                                    type="text" 
                                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" 
                                                    name="noun3" value={noun3} onChange={(e) => setNoun3(e.target.value)} required 
                                                />
                                            </div>
                                            <div className="col-span-6 sm:col-span-3">
                                                <label className="block text-sm font-medium text-gray-700">
                                                    Adjective :
                                                </label>
                                                <input
                                                    type="text" 
                                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" 
                                                    name="adjective5" value={adjective5} onChange={(e) => setAdjective5(e.target.value)} required 
                                                />
                                            </div>
                                            <div className="col-span-6 sm:col-span-3">
                                                <label className="block text-sm font-medium text-gray-700">
                                                    Plural Noun :
                                                </label>
                                                <input
                                                    type="text" 
                                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" 
                                                    name="pluralNoun3" value={pluralNoun3} onChange={(e) => setPluralNoun3(e.target.value)} required 
                                                />
                                            </div>
                                            <div className="col-span-6 sm:col-span-3">
                                                <label className="block text-sm font-medium text-gray-700">
                                                    Adjective :
                                                </label>
                                                <input
                                                    type="text" 
                                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" 
                                                    name="adjective6" value={adjective6} onChange={(e) => setAdjective6(e.target.value)} required 
                                                />
                                            </div>
                                            <div className="col-span-6 sm:col-span-3">
                                                <label className="block text-sm font-medium text-gray-700">
                                                    Adjective :
                                                </label>
                                                <input
                                                    type="text" 
                                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" 
                                                    name="adjectve7" value={adjective7} onChange={(e) => setAdjective7(e.target.value)} required 
                                                />
                                            </div>
                                            <div className="col-span-6 sm:col-span-3">
                                                <label className="block text-sm font-medium text-gray-700">
                                                    Noun :
                                                </label>
                                                <input
                                                    type="text" 
                                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" 
                                                    name="noun4" value={noun4} onChange={(e) => setNoun4(e.target.value)} required 
                                                />
                                            </div>
                                            <div className="col-span-6 sm:col-span-3">
                                                <label className="block text-sm font-medium text-gray-700">
                                                    Adverb :
                                                </label>
                                                <input
                                                    type="text" 
                                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" 
                                                    name="adverb" value={adverb} onChange={(e) => setAdverb(e.target.value)} required 
                                                />
                                            </div>
                                            <div className="col-span-6 sm:col-span-3">
                                                <label className="block text-sm font-medium text-gray-700">
                                                    Random Alphabetical Letter :
                                                </label>
                                                <input
                                                    type="text" 
                                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" 
                                                    name="letter" value={letter} onChange={(e) => setLetter(e.target.value)} required 
                                                />
                                            </div>
                                            <div className="col-span-6 sm:col-span-3">
                                                <label className="block text-sm font-medium text-gray-700">
                                                    Noun5 :
                                                </label>
                                                <input
                                                    type="text" 
                                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" 
                                                    name="noun5" value={noun5} onChange={(e) => setNoun5(e.target.value)} required 
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-gray-50 px-4 py-3 text-right sm:px-6"> 
                                        <button
                                            type="submit" 
                                            value="Update" 
                                            className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" 
                                        >
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BandUpdate;