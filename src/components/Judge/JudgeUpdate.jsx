// UPDATE
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const JudgeUpdate = (props) => {

    const {id} = useParams();

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
    const [writer, setWriter] = useState("");

    useEffect(() => {
        axios.get(`http://localhost:8000/api/judge/${id}`)
        .then((res) => {
            console.log(res);
            console.log(res.data);

            setYourName(res.data.yourName);
            setNoun(res.data.noun);
            setNoun2(res.data.noun2);
            setBodyPart(res.data.bodyPart);
            setNoun3(res.data.noun3);
            setAdverb(res.data.adverb);
            setFname(res.data.fName);
            setAdjective(res.data.adjective);
            setPluralNoun(res.data.pluralNoun);
            setName(res.data.name);
            setAnimal(res.data.animal);
            setPluralNoun2(res.data.pluralNoun2);
            setLocation(res.data.location);
            setName2(res.data.name2);
            setAdjective2(res.data.adjective2);
            setNoun4(res.data.noun4);
            setNoun5(res.data.noun5);
            setNoun6(res.data.noun6);
            setAdjective3(res.data.adjective3);
            setWriter(res.data.yourName);
        })
        .catch((err) => {
            console.log(err);
        });
    }, []);

    const onSubmitHandler = (e) => {
        e.preventDefault();

        axios.put(`http://localhost:8000/api/judge/${id}`, {
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
                        <label>Noun: </label>
                        <input type="text" name="noun" value={noun} onChange={(e) => setNoun(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Noun: </label>
                        <input type="text" name="noun2" value={noun2} onChange={(e) => setNoun2(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Part of the Body: </label>
                        <input type="text" name="bodyPart" value={bodyPart} onChange={(e) => setBodyPart(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Noun: </label>
                        <input type="text" name="noun3" value={noun3} onChange={(e) => setNoun3(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Adverb: </label>
                        <input type="text" name="adverb" value={adverb} onChange={(e) => setAdverb(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Random [F] Name: </label>
                        <input type="text" name="fName" value={fName} onChange={(e) => setFname(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Adjective: </label>
                        <input type="text" name="adjective" value={adjective} onChange={(e) => setAdjective(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Plural Noun: </label>
                        <input type="text" name="pluralNoun" value={pluralNoun} onChange={(e) => setPluralNoun(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Random Name: </label>
                        <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Random Animal: </label>
                        <input type="text" name="animal" value={animal} onChange={(e) => setAnimal(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Plural Noun: </label>
                        <input type="text" name="pluralNoun2" value={pluralNoun2} onChange={(e) => setPluralNoun2(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Location: </label>
                        <input type="text" name="location" value={location} onChange={(e) => setLocation(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Random Name: </label>
                        <input type="text" name="name2" value={name2} onChange={(e) => setName2(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Adjective: </label>
                        <input type="text" name="adjective2" value={adjective2} onChange={(e) => setAdjective2(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Noun: </label>
                        <input type="text" name="noun4" value={noun4} onChange={(e) => setNoun4(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Noun: </label>
                        <input type="text" name="noun5" value={noun5} onChange={(e) => setNoun5(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Noun: </label>
                        <input type="text" name="noun6" value={noun6} onChange={(e) => setNoun6(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Adjective: </label>
                        <input type="text" name="adjective3" value={adjective3} onChange={(e) => setAdjective3(e.target.value)} />
                    </div>
                    <br />
                    <input type="submit" value="Update Story" />
                </form>
            </div>
        </div>
    )
}

export default JudgeUpdate
