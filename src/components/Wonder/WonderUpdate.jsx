// UPDATE
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const WonderUpdate = (props) => {

    const {id} = useParams();

    const [yourName, setYourName] = useState("");
    const [pluralNoun, setPluralNoun] = useState("");
    const [noun, setNoun] = useState("");
    const [adjective, setAdjective] = useState("");
    const [bodyPart, setBodyPart] = useState("");
    const [adjective2, setAdjective2] = useState("");
    const [adjective3, setAdjective3] = useState("");
    const [noun2, setNoun2] = useState("");
    const [name, setName] = useState("");
    const [pluralNoun2, setPluralNoun2] = useState("");
    const [adverb, setAdverb] = useState("");
    const [bodyPart2, setBodyPart2] = useState("");
    const [adjective4, setAdjective4] = useState("");
    const [noun3, setNoun3] = useState("");
    const [pluralNoun3, setPluralNoun3] = useState("");
    const [adjective5, setAdjective5] = useState("");
    const [location, setLocation] = useState("");

    const navigate = useNavigate();
    const [writer, setWriter] = useState("");

    useEffect(() => {
        axios.get(`http://localhost:8000/api/wonder/${id}`)
        .then((res) => {
            console.log(res);
            console.log(res.data);

            setYourName(res.data.yourName);
            setPluralNoun(res.data.pluralNoun);
            setNoun(res.data.noun);
            setAdjective(res.data.adjective);
            setBodyPart(res.data.bodyPart);
            setAdjective2(res.data.adjective2);
            setAdjective3(res.data.adjective3);
            setNoun2(res.data.noun2);
            setName(res.data.name);
            setPluralNoun2(res.data.pluralNoun2);
            setAdverb(res.data.adverb);
            setBodyPart2(res.data.bodyPart2);
            setAdjective4(res.data.adjective4);
            setNoun3(res.data.noun3);
            setPluralNoun3(res.data.pluralNoun3);
            setAdjective5(res.data.adjective5);
            setLocation(res.data.location);
            setWriter(res.data.yourName);
        })
        .catch((err) => {
            console.log(err);
        });
    }, []);

    const onSubmitHandler = (e) => {
        e.preventDefault();

        axios.put(`http://localhost:8000/api/wonder/${id}`, {
            yourName,
            pluralNoun,
            noun,
            adjective,
            bodyPart,
            adjective2,
            adjective3,
            noun2,
            name,
            pluralNoun2,
            adverb,
            bodyPart2,
            adjective4,
            noun3,
            pluralNoun3,
            adjective5,
            location,
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
                        {/* <input  value={randomAdj} onChange={(e) => setAdjective(e.randomAdj)}/> */}
                    </div>
                    <div className="form-group">
                        <label>Noun: </label>
                        <input type="text" name="noun" value={noun} onChange={(e) => setNoun(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Adjective: </label>
                        <input type="text" name="adjective" value={adjective} onChange={(e) => setAdjective(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Part of the Body: </label>
                        <input type="text" name="bodyPart" value={bodyPart} onChange={(e) => setBodyPart(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Adjective: </label>
                        <input type="text" name="adjective2" value={adjective2} onChange={(e) => setAdjective2(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Adjective: </label>
                        <input type="text" name="adjective3" value={adjective3} onChange={(e) => setAdjective3(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Noun: </label>
                        <input type="text" name="noun2" value={noun2} onChange={(e) => setNoun2(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Random Name: </label>
                        <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Plural Noun: </label>
                        <input type="text" name="pluralNoun2" value={pluralNoun2} onChange={(e) => setPluralNoun2(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Adverb: </label>
                        <input type="text" name="adverb" value={adverb} onChange={(e) => setAdverb(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Part of the Body: </label>
                        <input type="text" name="bodyPart2" value={bodyPart2} onChange={(e) => setBodyPart2(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Adjective: </label>
                        <input type="text" name="adjective4" value={adjective4} onChange={(e) => setAdjective4(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Noun: </label>
                        <input type="text" name="noun3" value={noun3} onChange={(e) => setNoun3(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Plural Noun: </label>
                        <input type="text" name="pluralNoun3" value={pluralNoun3} onChange={(e) => setPluralNoun3(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Adjective: </label>
                        <input type="text" name="adjective5" value={adjective5} onChange={(e) => setAdjective5(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Location: </label>
                        <input type="text" name="location" value={location} onChange={(e) => setLocation(e.target.value)} />
                    </div>
                    <br />
                    <input type="submit" value="Update Story" />
                </form>
            </div>
        </div>
    )
}

export default WonderUpdate
