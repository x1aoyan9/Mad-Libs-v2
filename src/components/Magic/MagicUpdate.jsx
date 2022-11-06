// UPDATE
import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const MagicUpdate = (props) => {

    const {id} = useParams();

    const [yourName, setYourName] = useState("");
    const [pluralNoun, setPluralNoun] = useState("");
    const [adjective, setAdjective] = useState("");
    const [adjective2, setAdjective2] = useState("");
    const [noun, setNoun] = useState("");
    const [noun2, setNoun2] = useState("");
    const [noun3, setNoun3] = useState("");
    const [noun4, setNoun4] = useState("");
    const [adjective3, setAdjective3] = useState("");
    const [bodyPart, setBodyPart] = useState("");
    const [pluralNoun2, setPluralNoun2] = useState("");
    const [adjective4, setAdjective4] = useState("");
    const [noun5, setNoun5] = useState("");
    const [adjective5, setAdjective5] = useState("");
    const [noun6, setNoun6] = useState("");
    const [bodyParts, setBodyParts] = useState("");
    const [bodyPart2, setBodyPart2] = useState("");
    const [pluralNoun3, setPluralNoun3] = useState("");

    const navigate = useNavigate();
    const [writer, setWriter] = useState("");

    useEffect(() => {
        axios.get(`http://localhost:8000/api/magic/${id}`)
        .then((res) => {
            console.log(res);
            console.log(res.data);

            setYourName(res.data.yourName);
            setPluralNoun(res.data.pluralNoun);
            setAdjective(res.data.adjective);
            setAdjective2(res.data.adjective2);
            setNoun(res.data.noun);
            setNoun2(res.data.noun2);
            setNoun3(res.data.noun3);
            setNoun4(res.data.noun4);
            setAdjective3(res.data.adjective3);
            setBodyPart(res.data.bodyPart);
            setPluralNoun2(res.data.pluralNoun2);
            setAdjective4(res.data.adjective4);
            setNoun5(res.data.noun5);
            setAdjective5(res.data.adjective5);
            setNoun6(res.data.noun6);
            setBodyParts(res.data.bodyParts);
            setBodyPart2(res.data.bodyPart2);
            setPluralNoun3(res.data.pluralNoun3);
            setWriter(res.data.yourName);
        })
        .catch((err) => {
            console.log(err);
        });
    }, []);

    const onSubmitHandler = (e) => {
        e.preventDefault();

        axios.put(`http://localhost:8000/api/magic/${id}`, {
            yourName,
            pluralNoun,
            adjective,
            adjective2,
            noun,
            noun2,
            noun3,
            noun4,
            adjective3,
            bodyPart,
            pluralNoun2,
            adjective4,
            noun5,
            adjective5,
            noun6,
            bodyParts,
            bodyPart2,
            pluralNoun3,
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
            <hr /> <br />
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
                        <label>Adjective: </label>
                        <input type="text" name="adjective2" value={adjective2} onChange={(e) => setAdjective2(e.target.value)} />
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
                        <label>Noun: </label>
                        <input type="text" name="noun3" value={noun3} onChange={(e) => setNoun3(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Noun: </label>
                        <input type="text" name="noun4" value={noun4} onChange={(e) => setNoun4(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Adjective: </label>
                        <input type="text" name="adjective3" value={adjective3} onChange={(e) => setAdjective3(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Part of the Body: </label>
                        <input type="text" name="bodyPart" value={bodyPart} onChange={(e) => setBodyPart(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Plural Noun: </label>
                        <input type="text" name="pluralNoun2" value={pluralNoun2} onChange={(e) => setPluralNoun2(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Adjective: </label>
                        <input type="text" name="adjective4" value={adjective4} onChange={(e) => setAdjective4(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Noun: </label>
                        <input type="text" name="noun5" value={noun5} onChange={(e) => setNoun5(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Adjective: </label>
                        <input type="text" name="adjective5" value={adjective5} onChange={(e) => setAdjective5(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Noun: </label>
                        <input type="text" name="noun6" value={noun6} onChange={(e) => setNoun6(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Parts of the Body: </label>
                        <input type="text" name="bodyParts" value={bodyParts} onChange={(e) => setBodyParts(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Part of the Body: </label>
                        <input type="text" name="bodyPart2" value={bodyPart2} onChange={(e) => setBodyPart2(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Plural Noun: </label>
                        <input type="text" name="pluralNoun3" value={pluralNoun3} onChange={(e) => setPluralNoun3(e.target.value)} />
                    </div>
                    <br />
                    <input type="submit" value="Update Story" />
                </form>
            </div>
        </div>
    )
}

export default MagicUpdate
