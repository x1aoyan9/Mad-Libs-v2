// CREATE
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const JudgeForm = (props) => {

    const { judgeList, setJudgeList } = props;

    const [yourName, setYourName] = useState("");
    const [noun, setNoun] = useState("");
    const [noun2, setNoun2] = useState("");
    const [bodyPart, setBodyPart] = useState("");
    const [noun3, setNoun3] = useState("");
    const [adverb, setAdverb] = useState("");
    const [fName, setFname] = useState("");
    const [adjective, setAdjective] = useState("");
    const [pluralNoun, setPluralNoun] = useState("");
    const [name, setName] = useState("");
    const [animal, setAnimal] = useState("");
    const [pluralNoun2, setPluralNoun2] = useState("");
    const [location, setLocation] = useState("");
    const [name2, setName2] = useState("");
    const [adjective2, setAdjective2] = useState("");
    const [noun4, setNoun4] = useState("");
    const [noun5, setNoun5] = useState("");
    const [noun6, setNoun6] = useState("");
    const [adjective3, setAdjective3] = useState("");

    const navigate = useNavigate();

    const onSubmitHandler = (e) => {
        e.preventDefault();

        axios.post('http://localhost:8000/api/judge/new', {
            yourName,
            noun,
            noun2,
            bodyPart,
            noun3,
            adverb,
            fName,
            adjective,
            pluralNoun,
            name,
            animal,
            pluralNoun2,
            location,
            name2,
            adjective2,
            noun4,
            noun5,
            noun6,
            adjective3,
        })
        .then((res) => {
            console.log(res.data);
            navigate(`/`);

            setJudgeList([...judgeList, res.data]);
            setYourName("");
            setNoun("");
            setNoun2("");
            setBodyPart("");
            setNoun3("");
            setAdverb("");
            setFname("");
            setAdjective("");
            setPluralNoun("");
            setName("");
            setAnimal("");
            setPluralNoun2("");
            setLocation("");
            setName2("");
            setAdjective2("");
            setNoun4("");
            setNoun5("");
            setNoun6("");
            setAdjective3("");
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
                                <h2 className="text-lg font-medium leading-6 text-gray-900">Judges' Decision</h2>
                                <h3 className="mt-1 text-sm text-gray-600">Please fill in the blanks.</h3>
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
                                                    Noun :
                                                </label>
                                                <input 
                                                    type="text" 
                                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" 
                                                    name="noun3" value={noun3} onChange={(e) => setNoun3(e.target.value)} required 
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
                                                    Random [Female] Name :
                                                </label>
                                                <input
                                                    type="text" 
                                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" 
                                                    name="fName" value={fName} onChange={(e) => setFname(e.target.value)} required 
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
                                                    name="pluralNoun" value={pluralNoun} onChange={(e) => setPluralNoun(e.target.value)} required 
                                                />
                                            </div>
                                            <div className="col-span-6 sm:col-span-3">
                                                <label className="block text-sm font-medium text-gray-700">
                                                    Random [non gender-specific] Name :
                                                </label>
                                                <input
                                                    type="text" 
                                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" 
                                                    name="name" value={name} onChange={(e) => setName(e.target.value)} required 
                                                />
                                            </div>
                                            <div className="col-span-6 sm:col-span-3">
                                                <label className="block text-sm font-medium text-gray-700">
                                                    Random Animal :
                                                </label>
                                                <input
                                                    type="text" 
                                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" 
                                                    name="animal" value={animal} onChange={(e) => setAnimal(e.target.value)} required 
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
                                                    Random Location :
                                                </label>
                                                <input
                                                    type="text" 
                                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" 
                                                    name="location" value={location} onChange={(e) => setLocation(e.target.value)} required 
                                                />
                                            </div>
                                            <div className="col-span-6 sm:col-span-3">
                                                <label className="block text-sm font-medium text-gray-700">
                                                    Random [non gender-specific] Name :
                                                </label>
                                                <input
                                                    type="text" 
                                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" 
                                                    name="name2" value={name2} onChange={(e) => setName2(e.target.value)} required 
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
                                                    name="noun4" value={noun4} onChange={(e) => setNoun4(e.target.value)} required 
                                                />
                                            </div>
                                            <div className="col-span-6 sm:col-span-3">
                                                <label className="block text-sm font-medium text-gray-700">
                                                    Noun :
                                                </label>
                                                <input
                                                    type="text" 
                                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" 
                                                    name="noun5" value={noun5} onChange={(e) => setNoun5(e.target.value)} required 
                                                />
                                            </div>
                                            <div className="col-span-6 sm:col-span-3">
                                                <label className="block text-sm font-medium text-gray-700">
                                                    Noun :
                                                </label>
                                                <input
                                                    type="text" 
                                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" 
                                                    name="noun6" value={noun6} onChange={(e) => setNoun6(e.target.value)} required 
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
                                        </div>
                                    </div>
                                    <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                                        <button type="submit" className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                                            Submit
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

export default JudgeForm;