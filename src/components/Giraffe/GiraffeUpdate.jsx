// UPDATE
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const GiraffeUpdate = (props) => {

    const {id} = useParams();

    const [yourName, setYourName] = useState("");
    const [pluralNoun, setPluralNoun] = useState("");
    const [pluralNoun2, setPluralNoun2] = useState("");
    const [bodyPart, setBodyPart] = useState("");
    const [number, setNumber] = useState("");
    const [pluralNoun3, setPluralNoun3] = useState("");
    const [bodyPart2, setBodyPart2] = useState("");
    const [liquid, setLiquid] = useState("");
    const [bodyParts, setBodyParts] = useState("");
    const [bodyPart3, setBodyPart3] = useState("");
    const [adjective, setAdjective] = useState("");
    const [pluralNoun4, setPluralNoun4] = useState("");
    const [adjective2, setAdjective2] = useState("");
    const [adjective3, setAdjective3] = useState("");
    const [verbEnding_ING, setVerbEnding_ING] = useState("");
    const [noun, setNoun] = useState("");
    const [pluralNoun5, setPluralNoun5] = useState("");
    const [noun2, setNoun2] = useState("");

    const navigate = useNavigate();
    const [writer, setWriter] = useState("");

    useEffect(() => {
        axios.get(`http://localhost:8000/api/giraffe/${id}`)
        .then((res) => {
            console.log(res.data);

            setYourName(res.data.yourName);
            setPluralNoun(res.data.pluralNoun);
            setPluralNoun2(res.data.pluralNoun2);
            setBodyPart(res.data.bodyPart);
            setNumber(res.data.number);
            setPluralNoun3(res.data.pluralNoun3);
            setBodyPart2(res.data.bodyPart2);
            setLiquid(res.data.liquid);
            setBodyParts(res.data.bodyParts);
            setBodyPart3(res.data.bodyPart3);
            setAdjective(res.data.adjective);
            setPluralNoun4(res.data.pluralNoun4);
            setAdjective2(res.data.adjective2);
            setAdjective3(res.data.adjective3);
            setVerbEnding_ING(res.data.verbEnding_ING);
            setNoun(res.data.noun);
            setPluralNoun5(res.data.pluralNoun5);
            setNoun2(res.data.noun2);
            setWriter(res.data.yourName);
        })
        .catch((err) => {
            console.log(err);
        });
    }, []);

    const onSubmitHandler = (e) => {
        e.preventDefault();

        axios.put(`http://localhost:8000/api/giraffe/${id}`, {
            yourName,
            pluralNoun,
            pluralNoun2,
            bodyPart,
            number,
            pluralNoun3,
            bodyPart2,
            liquid,
            bodyParts,
            bodyPart3,
            adjective,
            pluralNoun4,
            adjective2,
            adjective3,
            verbEnding_ING,
            noun,
            pluralNoun5,
            noun2,
            writer,
        })
        .then((res) => {
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
                                <h2 className="text-lg font-medium leading-6 text-gray-900">Have I Got a Giraffe For You</h2>
                                <h3 className="mt-1 text-sm text-gray-600">Edit your answers.</h3>
                                <br />
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
                                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" 
                                                    name="yourName" value={yourName} onChange={(e) => setYourName(e.target.value)} required 
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
                                                    Part of the Body :
                                                </label>
                                                <input
                                                    type="text"
                                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" 
                                                    name="bodyPart" value={bodyPart} onChange={(e) => setBodyPart(e.target.value)} required
                                                />
                                            </div>
                                            <div className="col-span-6 sm:col-span-3">
                                                <label className="block text-sm font-medium text-gray-700">
                                                    Number :
                                                </label>
                                                <input
                                                    type="number"
                                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" 
                                                    name="number" value={number} onChange={(e) => setNumber(e.target.value)} required
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
                                                    Part of the Body :
                                                </label>
                                                <input
                                                    type="text"
                                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" 
                                                    name="bodyPart2" value={bodyPart2} onChange={(e) => setBodyPart2(e.target.value)} required
                                                />
                                            </div>
                                            <div className="col-span-6 sm:col-span-3">
                                                <label className="block text-sm font-medium text-gray-700">
                                                    Random Liquid :
                                                </label>
                                                <input
                                                    type="text"
                                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" 
                                                    name="liquid" value={liquid} onChange={(e) => setLiquid(e.target.value)} required
                                                />
                                            </div>
                                            <div className="col-span-6 sm:col-span-3">
                                                <label className="block text-sm font-medium text-gray-700">
                                                    Parts of the Body :
                                                </label>
                                                <input
                                                    type="text"
                                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" 
                                                    name="bodyParts" value={bodyParts} onChange={(e) => setBodyParts(e.target.value)} required
                                                />
                                            </div>
                                            <div className="col-span-6 sm:col-span-3">
                                                <label className="block text-sm font-medium text-gray-700">
                                                    Part of the Body :
                                                </label>
                                                <input
                                                    type="text"
                                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" 
                                                    name="bodyPart3" value={bodyPart3} onChange={(e) => setBodyPart3(e.target.value)} required
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
                                                    Plural Noun :
                                                </label>
                                                <input
                                                    type="text"
                                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" 
                                                    name="pluralNoun4" value={pluralNoun4} onChange={(e) => setPluralNoun4(e.target.value)} required
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
                                                    Verb ending in -ING :
                                                </label>
                                                <input
                                                    type="text"
                                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" 
                                                    name="verbEnding_ING" value={verbEnding_ING} onChange={(e) => setVerbEnding_ING(e.target.value)} required
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
                                                    Plural Noun :
                                                </label>
                                                <input
                                                    type="text"
                                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" 
                                                    name="pluralNoun5" value={pluralNoun5} onChange={(e) => setPluralNoun5(e.target.value)} required
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
                                        </div>
                                    </div>
                                    <div className="bg-gray-50 px-4 py-3 text-right sm:px-6"> 
                                        <button
                                            type="submit" 
                                            className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" 
                                        >
                                            Update
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

export default GiraffeUpdate;