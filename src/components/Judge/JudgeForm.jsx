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

        axios.post('http://localhost:8000/api/judge', {
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
            console.log(res);
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
                                                <input className="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" type="text" name="yourName" value={yourName} onChange={(e) => setYourName(e.target.value)} />
                                            </div>
                                            <div className="col-span-6 sm:col-span-3">
                                                <label className="block text-sm font-medium text-gray-700">
                                                    Adjective :
                                                </label>
                                                <input
                                                    type="text"
                                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                />
                                            </div>
                                            <div className="col-span-6 sm:col-span-3">
                                                <label className="block text-sm font-medium text-gray-700">
                                                    Random Name :
                                                </label>
                                                <input
                                                    type="text"
                                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                />
                                            </div>
                                            <div className="col-span-6 sm:col-span-3">
                                                <label className="block text-sm font-medium text-gray-700">
                                                    Adjective2 :
                                                </label>
                                                <input
                                                    type="text"
                                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                />
                                            </div>
                                            <div className="col-span-6 sm:col-span-3">
                                                <label className="block text-sm font-medium text-gray-700">
                                                    Noun :
                                                </label>
                                                <input
                                                    type="text"
                                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                />
                                            </div>
                                            <div className="col-span-6 sm:col-span-3">
                                                <label className="block text-sm font-medium text-gray-700">
                                                    Adjective3 :
                                                </label>
                                                <input
                                                    type="text"
                                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                />
                                            </div>
                                            <div className="col-span-6 sm:col-span-3">
                                                <label className="block text-sm font-medium text-gray-700">
                                                    Plural Noun :
                                                </label>
                                                <input
                                                    type="text"
                                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                />
                                            </div>
                                            <div className="col-span-6 sm:col-span-3">
                                                <label className="block text-sm font-medium text-gray-700">
                                                    Noun2 :
                                                </label>
                                                <input
                                                    type="text"
                                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                />
                                            </div>
                                            <div className="col-span-6 sm:col-span-3">
                                                <label className="block text-sm font-medium text-gray-700">
                                                    Adjective4 :
                                                </label>
                                                <input
                                                    type="text"
                                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                />
                                            </div>
                                            <div className="col-span-6 sm:col-span-3">
                                                <label className="block text-sm font-medium text-gray-700">
                                                    Plural Noun2 :
                                                </label>
                                                <input
                                                    type="text"
                                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                />
                                            </div>
                                            <div className="col-span-6 sm:col-span-3">
                                                <label className="block text-sm font-medium text-gray-700">
                                                    Noun3 :
                                                </label>
                                                <input
                                                    type="text"
                                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                />
                                            </div>
                                            <div className="col-span-6 sm:col-span-3">
                                                <label className="block text-sm font-medium text-gray-700">
                                                    Adjective5 :
                                                </label>
                                                <input
                                                    type="text"
                                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                />
                                            </div>
                                            <div className="col-span-6 sm:col-span-3">
                                                <label className="block text-sm font-medium text-gray-700">
                                                    Plural Noun3 :
                                                </label>
                                                <input
                                                    type="text"
                                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                />
                                            </div>
                                            <div className="col-span-6 sm:col-span-3">
                                                <label className="block text-sm font-medium text-gray-700">
                                                    Adjective6 :
                                                </label>
                                                <input
                                                    type="text"
                                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                />
                                            </div>
                                            <div className="col-span-6 sm:col-span-3">
                                                <label className="block text-sm font-medium text-gray-700">
                                                    Adjective7 :
                                                </label>
                                                <input
                                                    type="text"
                                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                />
                                            </div>
                                            <div className="col-span-6 sm:col-span-3">
                                                <label className="block text-sm font-medium text-gray-700">
                                                    Noun4 :
                                                </label>
                                                <input
                                                    type="text"
                                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                />
                                            </div>
                                            <div className="col-span-6 sm:col-span-3">
                                                <label className="block text-sm font-medium text-gray-700">
                                                    Adverb :
                                                </label>
                                                <input
                                                    type="text"
                                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                />
                                            </div>
                                            <div className="col-span-6 sm:col-span-3">
                                                <label className="block text-sm font-medium text-gray-700">
                                                    Random Alphabetical Letter :
                                                </label>
                                                <input
                                                    type="text"
                                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                />
                                            </div>
                                            <div className="col-span-6 sm:col-span-3">
                                                <label className="block text-sm font-medium text-gray-700">
                                                    Noun5 :
                                                </label>
                                                <input
                                                    type="text"
                                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                                        <button type="submit" className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                                            Save
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default JudgeForm
