// UPDATE
import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

import Header from '../Header';

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
            console.log(res);
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
        <div className="container">
            <Header />
            <Link to={`/band`} className="link-btn">Back</Link>
            <hr /> <br />
            <div className="form">
                <h2>Edit</h2>
                <form onSubmit={onSubmitHandler}>
                    <div className="form-group">
                        <label>Your Name: </label>
                        <input type="text" name="yourName" value={yourName} onChange={(e) => setYourName(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Adjective: </label>
                        <input type="text" name="adjective" value={adjective} onChange={(e) => setAdjective(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Random Name: </label>
                        <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Adjective: </label>
                        <input type="text" name="adjective2" value={adjective2} onChange={(e) => setAdjective2(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Noun: </label>
                        <input type="text" name="noun" value={noun} onChange={(e) => setNoun(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Adjective: </label>
                        <input type="text" name="adjective3" value={adjective3} onChange={(e) => setAdjective3(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Plural Noun: </label>
                        <input type="text" name="pluralNoun" value={pluralNoun} onChange={(e) => setPluralNoun(e.target.value)} />
                        {/* <input  value={randomAdj} onChange={(e) => setAdjective(e.randomAdj)}/> */}
                    </div>
                    <div className="form-group">
                        <label>Noun: </label>
                        <input type="text" name="noun2" value={noun2} onChange={(e) => setNoun2(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Adjective: </label>
                        <input type="text" name="adjective4" value={adjective4} onChange={(e) => setAdjective4(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Plural Noun: </label>
                        <input type="text" name="pluralNoun2" value={pluralNoun2} onChange={(e) => setPluralNoun2(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Noun: </label>
                        <input type="text" name="noun3" value={noun3} onChange={(e) => setNoun3(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Adjective: </label>
                        <input type="text" name="adjective5" value={adjective5} onChange={(e) => setAdjective5(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Plural Noun: </label>
                        <input type="text" name="pluralNoun3" value={pluralNoun3} onChange={(e) => setPluralNoun3(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Adjective: </label>
                        <input type="text" name="adjective6" value={adjective6} onChange={(e) => setAdjective6(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Adjective: </label>
                        <input type="text" name="adjective7" value={adjective7} onChange={(e) => setAdjective7(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Noun: </label>
                        <input type="text" name="noun4" value={noun4} onChange={(e) => setNoun4(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Adverb: </label>
                        <input type="text" name="adverb" value={adverb} onChange={(e) => setAdverb(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Letter in the Alphabet: </label>
                        <input type="text" name="letter" value={letter} onChange={(e) => setLetter(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Noun: </label>
                        <input type="text" name="noun5" value={noun5} onChange={(e) => setNoun5(e.target.value)} />
                    </div>
                    <br />
                    <input type="submit" value="Update Story" />
                </form>
            </div>
        </div>
    );
};

export default BandUpdate;