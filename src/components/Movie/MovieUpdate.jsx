// UPDATE
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const MovieUpdate = (props) => {

    const {id} = useParams();

    const [yourName, setYourName] = useState("");
    const [pluralNoun, setPluralNoun] = useState("");
    const [adjective, setAdjective] = useState("");
    const [pluralNoun2, setPluralNoun2] = useState("");
    const [noun, setNoun] = useState("");
    const [adjective2, setAdjective2] = useState("");
    const [noun2, setNoun2] = useState("");
    const [noun3, setNoun3] = useState("");
    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [adjective3, setAdjective3] = useState("");
    const [name2, setName2] = useState("");
    const [name3, setName3] = useState("");
    const [adjective4, setAdjective4] = useState("");
    const [pluralNoun3, setPluralNoun3] = useState("");
    const [bodyParts, setBodyParts] = useState("");

    const navigate = useNavigate();
    const [writer, setWriter] = useState("");

    useEffect(() => {
        axios.get(`http://localhost:8000/api/movie/${id}`)
        .then((res) => {
            console.log(res);
            console.log(res.data);

            setYourName(res.data.yourName);
            setPluralNoun(res.data.pluralNoun);
            setAdjective(res.data.adjective);
            setPluralNoun2(res.data.plualNoun2);
            setNoun(res.data.noun);
            setAdjective2(res.data.adjective2);
            setNoun2(res.data.noun2);
            setNoun3(res.data.noun3);
            setName(res.data.name);
            setLocation(res.data.location);
            setAdjective3(res.data.adjective3);
            setName2(res.data.name2);
            setName3(res.data.name3);
            setAdjective4(res.data.adjective4);
            setPluralNoun3(res.data.pluralNoun3);
            setBodyParts(res.data.bodyParts);
            setWriter(res.data.yourName);
        })
        .catch((err) => {
            console.log(err);
        });
    }, []);

    const onSubmitHandler = (e) => {
        e.preventDefault();

        axios.put(`http://localhost:8000/api/movie/${id}`, {
            yourName,
            pluralNoun,
            adjective,
            pluralNoun2,
            noun,
            adjective2,
            noun2,
            noun3,
            name,
            location,
            adjective3,
            name2,
            name3,
            adjective4,
            pluralNoun3,
            bodyParts,
            writer,
        })
        .then((res) => {
            console.log(res);
            console.log(res.data);
            navigate(`/`);
        })
        .catch((err) => {
            console.log(err);
        });
    };

    return (
        <div className="container">
            <br />
            <div className="form">
                <h2>Edit</h2>
                <form onSubmit={onSubmitHandler}>
                    <div className="form-group">
                        <label>Your Name: </label>
                        <input type="text" name="yourName" value={yourName} onChange={(e) => setYourName(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Plural Noun: </label>
                        <input type="text" name="pluralNoun" value={pluralNoun} onChange={(e) => setPluralNoun(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Adjective: </label>
                        <input type="text" name="adjective" value={adjective} onChange={(e) => setAdjective(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Plural Noun: </label>
                        <input type="text" name="pluralNoun2" value={pluralNoun2} onChange={(e) => setPluralNoun2(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Noun: </label>
                        <input type="text" name="noun" value={noun} onChange={(e) => setNoun(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Adjective: </label>
                        <input type="text" name="adjective2" value={adjective2} onChange={(e) => setAdjective2(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Noun: </label>
                        <input type="text" name="noun2" value={noun2} onChange={(e) => setNoun2(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Noun: </label>
                        <input type="text" name="noun3" value={noun3} onChange={(e) => setNoun3(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Random Name: </label>
                        <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Location: </label>
                        <input type="text" name="location" value={location} onChange={(e) => setLocation(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Adjective: </label>
                        <input type="text" name="adjective3" value={adjective3} onChange={(e) => setAdjective3(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Random Name: </label>
                        <input type="text" name="name2" value={name2} onChange={(e) => setName2(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Random Name: </label>
                        <input type="text" name="name3" value={name3} onChange={(e) => setName3(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Adjective: </label>
                        <input type="text" name="adjective4" value={adjective4} onChange={(e) => setAdjective4(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Plural Noun: </label>
                        <input type="text" name="pluralNoun3" value={pluralNoun3} onChange={(e) => setPluralNoun3(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Part of the Body - plural: </label>
                        <input type="text" name="bodyParts" value={bodyParts} onChange={(e) => setBodyParts(e.target.value)} />
                    </div>
                    <br />
                    <input type="submit" value="Update Story" />
                </form>
            </div>
        </div>
    )
}

export default MovieUpdate
